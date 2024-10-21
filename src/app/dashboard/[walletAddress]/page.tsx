'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Using next/navigation
import DashboardCard from '@/components/DashboardComponents/DashboardCard';
import SearchAddress from '@/components/Reusables/SearchAddress';
import PortfolioItem from '@/components/DashboardComponents/PortfolioItem';
import Image from 'next/image';
import { getBalance, getAccount } from '@wagmi/core';
import { useReadContract } from 'wagmi';
import { formatUnits } from 'viem';
import { config } from '@/config';
import { abi } from '@/config/abi';

interface Coin {
  id: string;
  name: string;
  current_price: number;
  holdings: number;
  symbol: string;
  price_change_percentage_24h: number;
  image: string;
}

const ABS_TOKEN_ADDRESS = '0x1cA9Fc98f3b997E08bC04691414e33B1835aa7e5' as const;

interface WalletPageProps {
  params: {
    walletAddress: string;
  };
}
const WalletPage: React.FC<WalletPageProps> = ({ params }) => {
  const router = useRouter();
  const walletAddress = params.walletAddress;

  const [portfolioCoins, setPortfolioCoins] = useState<Coin[]>([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);
  const { address: loggedInAddress } = getAccount(config);

  const validWalletAddress =
    typeof walletAddress === 'string' && walletAddress.startsWith('0x')
      ? walletAddress
      : undefined;

  const isSearchedWallet = walletAddress !== loggedInAddress;

  const [balance, setBalance] = useState<string | undefined>(undefined);
  const [absBalance, setAbsBalance] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (validWalletAddress) {
          const result = await getBalance(config, {
            address: validWalletAddress as `0x${string}`,
            chainId: 137,
          });
          setBalance(result?.formatted || '0');
        }
      } catch (error) {
        console.error('Error fetching wallet balance:', error);
      }
    };

    fetchBalance();
  }, [validWalletAddress]);

  const { data: absBalanceData } = useReadContract({
    address: ABS_TOKEN_ADDRESS,
    abi,
    functionName: 'balanceOf',
    args: [validWalletAddress as `0x${string}`],
  });

  useEffect(() => {
    if (absBalanceData) {
      setAbsBalance(absBalanceData.toString());
    }
  }, [absBalanceData]);

  const totalPortfolioValue = portfolioCoins
    .reduce((total, coin) => total + coin.current_price * coin.holdings, 0)
    .toFixed(2);

    useEffect(() => {
      const fetchAllCoins = async () => {
        try {
          const response = await fetch('/api/coins', {
            method: 'GET',
          });

          if (!response.ok) {
            throw new Error('Failed to fetch coin data');
          }

          const data = await response.json();
          const maticCoin = data[0];

          const walletBalance = balance ? parseFloat(balance) : 0.0;
          const absTokenBalance = absBalance ? parseFloat(formatUnits(BigInt(absBalance), 18)) : 0.0;

          setPortfolioCoins([
            {
              id: maticCoin?.id || 'matic-network',
              name: maticCoin?.name || 'Polygon',
              current_price: maticCoin?.current_price || 0,
              holdings: walletBalance,
              symbol: 'MATIC',
              price_change_percentage_24h: maticCoin?.price_change_percentage_24h || 0,
              image:
                maticCoin?.image || 'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png',
            },
            {
              id: 'abs',
              name: 'ABS',
              current_price: 0,
              holdings: absTokenBalance,
              symbol: 'ABS',
              price_change_percentage_24h: 0,
              image: 'https://via.placeholder.com/40',
            },
          ]);
        } catch (error) {
          console.error('Error fetching coin data:', error);
        } finally {
          setLoadingPortfolio(false);
        }
      };

      fetchAllCoins();
    }, [walletAddress, balance, absBalance]);

  const handleWalletSearch = (newAddress: string) => {
    if (newAddress.startsWith('0x')) {
      router.push(`/dashboard/${newAddress}`);
    }
  };

  return (
    <div className="flex-1 bg-gray-100 h-screen">
      <section className="px-8 pt-8">
        <div className="grid grid-cols-2 items-center">
          <div className="flex items-center">
            {isSearchedWallet ? (
              <button onClick={() => router.back()} className="text-gray-800 text-2xl font-bold">
                Go Back
              </button>
            ) : (
              <h1 className="text-2xl font-bold">My Wallet</h1>
            )}
          </div>
          <div className="justify-end flex">
            <SearchAddress onSearch={handleWalletSearch} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-[20px] shadow-sm mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="https://via.placeholder.com/600/24f355e"
                alt="Profile Image"
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <h1 className="text-3xl font-bold">Wallet</h1>
                <p className="text-gray-500">Address: {walletAddress}</p>
                <p className="text-gray-500">${totalPortfolioValue}</p>
                {isSearchedWallet && (
                  <div className="mt-2 w-1/2">
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

        <div className="grid grid-cols-2 space-x-6">
          <div>
            <h2 className="text-lg font-bold mb-4">{isSearchedWallet ? 'Portfolio' : 'My Portfolio'}</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mb-6">
              {portfolioCoins.map((coin) => (
                <DashboardCard
                  key={coin.id}
                  title={coin.name}
                  amount={coin.holdings.toFixed(3)}
                  image={coin.image}
                />
              ))}
              <DashboardCard
                title="Total Balance (USD)"
                amount={`$${totalPortfolioValue}`}
                image="https://via.placeholder.com/40"
              />
            </section>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">{isSearchedWallet ? 'Assets' : 'My Assets'}</h2>
            <section className="bg-white p-6 rounded-[20px] shadow-sm max-h-80 overflow-auto">
              {loadingPortfolio ? (
                <div>Loading Assets...</div>
              ) : (
                portfolioCoins.map((coin) => (
                  <PortfolioItem
                    key={coin.id}
                    name={coin.name}
                    amount={`$${coin.current_price.toFixed(2)}`}
                    percentage={`${coin.price_change_percentage_24h.toFixed(2)}%`}
                    quantity={`${coin.holdings.toFixed(3)} ${coin.symbol.toUpperCase()}`}
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
