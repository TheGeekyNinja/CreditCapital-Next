"use client";
import { useState, useEffect } from "react";
import { useReadContract } from "wagmi";
import { formatUnits } from "viem";
import { abi } from "@/config/abi";

const StickyVault = () => {
  const VAULT_ADDRESS = process.env.NEXT_PUBLIC_VAULT_ADDRESS as `0x${string}`;
  const PHTG_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_PHTG_TOKEN_ADDRESS as `0x${string}`;
  const [goldPrice, setGoldPrice] = useState(0);

  const hardcodedPhtgBalance = 744444000000000000000000;
  const { data: phtgBalance } = useReadContract({
    address: PHTG_TOKEN_ADDRESS,
    abi,
    functionName: "balanceOf",
    args: [VAULT_ADDRESS],
  });

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const response = await fetch("/api/gold");
        if (!response.ok) {
          throw new Error("Failed to fetch gold price");
        }
        const data = await response.json();
        setGoldPrice(data.price);
      } catch (error) {
        console.error("Error fetching gold price:", error);
      }
    };

    fetchGoldPrice();
  }, []);

  const phtgAmount = phtgBalance ? Number(formatUnits(BigInt(hardcodedPhtgBalance), 18)) : 0;
  const totalValueUSD = phtgAmount * goldPrice;

  console.log('PHTG Balance:', phtgAmount);
  console.log('Gold Price:', goldPrice);
  console.log('Total Value USD:', totalValueUSD);

  if (totalValueUSD === 0) {
    return null;
  } else {
    return (
    <div className="bg-[#FFE79F] text-center py-1 text-lg font-medium text-[#666666]">
      Current Vault Holdings:
      <span className="text-black text-lg font-bold">${totalValueUSD.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      </div>
    );
  }
};

export default StickyVault;
