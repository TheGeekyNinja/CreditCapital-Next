import React from "react";
import Image from "next/image";

interface PortfolioItemProps {
  name: string;
  amount: string;
  percentage: string;
  quantity: string;
  image: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  name,
  amount,
  percentage,
  quantity,
  image,
}) => {
  return (
    <div className="grid grid-cols-2 items-center p-4">
      <div className="flex items-center space-x-4">
        <Image src={image} alt="Coin icon" width={24} height={24} />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-500">{quantity}</p>
        </div>
      </div>

      <div className="text-end">
        <p className="text-lg">{amount}</p>
        <p
          className={
            percentage.startsWith("+") ? "text-green-500" : "text-red-500"
          }
        >
          {percentage}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
