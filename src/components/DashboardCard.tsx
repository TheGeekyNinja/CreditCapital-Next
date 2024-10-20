import React from 'react';
import Image from 'next/image'; // For optimized image loading with Next.js

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  amount: string;
  change?: string;
  currency?: string; // Optional, as not all cards may pass a currency
  image?: string; // URL of the coin image
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, subtitle, amount, change, currency, image }) => {
  // Determine if the change is positive for the color logic
  const isPositive = change?.startsWith('+') ?? false;

  return (
    <div className="bg-white p-6 rounded-[20px] text-center shadow-sm w-64">
      {/* Card Header with Image */}
      <div className="flex justify-between items-center mb-4">
        {/* Image on the left */}
        <div className="flex items-center">
          {image && (
            <Image src={image} alt="coin logo" width={40} height={40} className="mr-3" />
          )}
          <div className="text-left">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="font-normal text-[#828280] text-xs">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Amount */}
      <div className="text-xl tracking-wider font-bold my-2 text-left">
        {amount}
      </div>

      {/* Change and Currency */}
      <div
        className={`tracking-widest text-left ${
          isPositive ? 'text-[#1ECB4F]' : 'text-[#B80900]'
        }`}
      >
        {change} {currency}
      </div>
    </div>
  );
};

export default DashboardCard;
