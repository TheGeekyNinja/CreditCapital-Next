import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="px-5 py-10 bg-[#003366] text-gray-300 text-sm flex gap-5 items-center"
      id="contact"
    >
      <Image src="/logo.png" alt="Logo" width={100} height={50} />
      <p>&copy; 2023, Capitalliance Ltd. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;