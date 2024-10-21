import { ConnectButton } from "../Reusables/ConnectButton";
import Link from 'next/link';

const DashboardNavbar = () => {
  return (
    <header className="flex justify-between items-center border-b-[0.5px] bg-white border-[#D0D5DD] p-4 px-6">
      <Link href="/" className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-full">
        Home
      </Link>
      <Link href="/" className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-full">
        Home
      </Link>
      <div className="flex items-center space-x-4">
        <ConnectButton />
      </div>
    </header>
  );
};

export default DashboardNavbar;
