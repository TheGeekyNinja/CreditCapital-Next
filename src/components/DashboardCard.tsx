import React from "react";
import Image from "next/image";

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  amount: string;
  change?: string;
  currency?: string;
  image?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  amount,
  change,
  currency,
  image,
}) => {
  const isPositive = change?.startsWith("+") ?? false;

  return (
    <div className="bg-white p-6 rounded-[20px] text-center shadow-sm w-64">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {image && (
            <Image
              src={image}
              alt="coin logo"
              width={40}
              height={40}
              className="mr-3"
            />
          )}
          <div className="text-left">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="font-normal text-[#828280] text-xs">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="text-xl tracking-wider font-bold my-2 text-left">
        {amount}
      </div>

      <div
        className={`tracking-widest text-left ${
          isPositive ? "text-[#1ECB4F]" : "text-[#B80900]"
        }`}
      >
        {change} {currency}
      </div>
    </div>
  );
};

export default DashboardCard;
