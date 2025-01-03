import Link from 'next/link';

const DashboardNavbar = () => {
  return (
    <header className="flex justify-between items-center border-b-[0.5px] bg-white border-[#D0D5DD] p-4 px-6">
      <Link href="/" className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-full">
        Home
      </Link>
      <div className="flex items-center space-x-4">
        <w3m-button label="Login to Connect" balance="hide"  />
      </div>
    </header>
  );
};

export default DashboardNavbar;
