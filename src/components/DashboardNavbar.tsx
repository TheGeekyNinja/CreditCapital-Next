
import { ConnectButton } from './ConnectButton';

const DashboardNavbar = () => {

  return (
    <header className="flex justify-end items-center border-b-[0.5px] bg-white border-[#D0D5DD] p-4 px-6">
      <div className="flex items-center space-x-4">
        <ConnectButton />
      </div>
    </header>
  );
};

export default DashboardNavbar;
