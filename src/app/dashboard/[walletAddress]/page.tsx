"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Using next/navigation
import DashboardCard from "@/components/DashboardComponents/DashboardCard";
import SearchAddress from "@/components/Reusables/SearchAddress";
import PortfolioItem from "@/components/DashboardComponents/PortfolioItem";
import Image from "next/image";
import { getBalance, getAccount } from "@wagmi/core";
import { useReadContract } from "wagmi";
import { formatUnits } from "viem";
import { config } from "@/config";
import { abi } from "@/config/abi";
import { formatCurrency, truncateAddress } from "@/utils/formatter";
import CopyAddress from "@/components/Reusables/CopyAddress";

interface Coin {
  id: string;
  name: string;
  current_price: number;
  holdings: number;
  symbol: string;
  price_change_percentage_24h: number;
  image: string;
}

interface WalletPageProps {
  params: {
    walletAddress: string;
  };
}

const WalletPage: React.FC<WalletPageProps> = ({ params }) => {
  const router = useRouter();
  const walletAddress = params.walletAddress;

  const [portfolioCoins, setPortfolioCoins] = useState<Coin[]>([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState<boolean>(true);
  const { address: loggedInAddress } = getAccount(config);

  const PHTG_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_PHTG_TOKEN_ADDRESS as `0x${string}`;

  const validWalletAddress =
    typeof walletAddress === "string" && walletAddress.startsWith("0x")
      ? walletAddress
      : undefined;

  const isSearchedWallet = walletAddress !== loggedInAddress;

  const [balance, setBalance] = useState<string | undefined>(undefined);
  const [phtgBalance, setPhtgBalance] = useState<string | undefined>(undefined);
  const [phtgPrice, setPhtgPrice] = useState<number>(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (validWalletAddress) {
          const result = await getBalance(config, {
            address: validWalletAddress as `0x${string}`,
            chainId: 137,
          });
          setBalance(result?.formatted || "0");
        }
      } catch (error) {
        console.error("Error fetching wallet balance:", error);
      }
    };

    fetchBalance();
  }, [validWalletAddress]);

  const { data: agtBalanceData } = useReadContract({
    address: PHTG_TOKEN_ADDRESS,
    abi,
    functionName: "balanceOf",
    args: [validWalletAddress as `0x${string}`],
  });
  console.log(phtgPrice)
  console.log(phtgBalance)

  useEffect(() => {
    if (agtBalanceData) {
      setPhtgBalance(agtBalanceData.toString());
    }
  }, [agtBalanceData]);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const response = await fetch("/api/gold");
        if (!response.ok) {
          throw new Error("Failed to fetch gold price");
        }
        const data = await response.json();
        setPhtgPrice(data.price);
      } catch (error) {
        console.error("Error fetching gold price:", error);
      }
    };

    fetchGoldPrice();
  }, []);

  const totalPortfolioValue = portfolioCoins.reduce(
    (total, coin) => total + coin.current_price * coin.holdings,
    0
  );

  useEffect(() => {
    const fetchAllCoins = async () => {
      try {
        const response = await fetch("/api/coins", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch coin data");
        }

        const data = await response.json();
        const maticCoin = data[0];

        const walletBalance = balance ? parseFloat(balance) : 0.0;
        const phtgTokenBalance = phtgBalance
          ? parseFloat(formatUnits(BigInt(phtgBalance), 18))
          : 0.0;

        setPortfolioCoins([
          {
            id: maticCoin?.id || "matic-network",
            name: maticCoin?.name || "Polygon",
            current_price: maticCoin?.current_price || 0,
            holdings: walletBalance,
            symbol: "MATIC",
            price_change_percentage_24h:
              maticCoin?.price_change_percentage_24h || 0,
            image:
              maticCoin?.image ||
              "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png",
          },
          {
            id: "phtg",
            name: "PHTG",
            current_price: phtgPrice,
            holdings: phtgTokenBalance,
            symbol: "PHTG",
            price_change_percentage_24h: 0,
            image: "https://via.placeholder.com/40",
          },
        ]);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      } finally {
        setLoadingPortfolio(false);
      }
    };

    fetchAllCoins();
  }, [walletAddress, balance, phtgBalance, phtgPrice]);

  const handleWalletSearch = (newAddress: string) => {
    if (newAddress.startsWith("0x")) {
      router.push(`/dashboard/${newAddress}`);
    }
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-4">
      <section className="px-4 sm:px-8 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <div className="flex items-center">
            {isSearchedWallet ? (
              <button
                onClick={() => router.back()}
                className="text-xl sm:text-2xl font-bold"
              >
                Go Back
              </button>
            ) : (
              <h1 className="text-xl sm:text-2xl font-bold">My Wallet</h1>
            )}
          </div>
          <div className="flex justify-end mt-4 sm:mt-0">
            <SearchAddress onSearch={handleWalletSearch} />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-4 rounded-[20px] shadow-sm mb-6 mt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <Image
                src="https://via.placeholder.com/600/24f355e"
                alt="Profile Image"
                width={60}
                height={60}
                className="rounded-full sm:mr-4"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">Wallet</h1>
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 text-sm sm:hidden">
                    Address:{" "}
                    <span className="inline-block">
                      {truncateAddress(walletAddress)}
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm hidden sm:block">
                    Address:{" "}
                    <span className="inline-block">{walletAddress}</span>
                  </p>
                  <CopyAddress address={walletAddress} />
                </div>
                <p className="text-gray-500 text-sm sm:text-lg">
                  Total Balance: {formatCurrency(totalPortfolioValue)}
                </p>
                {isSearchedWallet && (
                  <div className="mt-2">
                    <a
                      href={`https://polygonscan.com/address/${walletAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      View on Block Explorer
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4">Assets</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioCoins.map((coin) => (
                <DashboardCard
                  key={coin.id}
                  title={coin.name}
                  amount={formatCurrency(coin.current_price)}
                  image={coin.image}
                />
              ))}
            </section>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4">
              {isSearchedWallet ? "Portfolio" : "My Portfolio"}
            </h2>
            <section className="bg-white p-4 sm:p-6 rounded-[20px] shadow-sm max-h-80 overflow-auto">
              {loadingPortfolio ? (
                <div>Loading Assets...</div>
              ) : (
                portfolioCoins.map((coin) => (
                  <PortfolioItem
                    key={coin.id}
                    name={coin.name}
                    amount={`${formatCurrency(
                      coin.current_price * coin.holdings
                    )}`}
                    percentage={`${coin.price_change_percentage_24h.toFixed(
                      2
                    )}%`}
                    quantity={`${coin.holdings.toFixed(
                      2
                    )} ${coin.symbol.toUpperCase()}`}
                    image={coin.image}
                  />
                ))
              )}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WalletPage;
