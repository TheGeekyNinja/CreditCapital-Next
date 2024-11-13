import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Products Column */}
          <div className="text-[#F2EDED]">
            <h3 className="font-semibold mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Product 2
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="text-[#F2EDED]">
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Website use disclaimers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Cookies policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms of use for Website
                </a>
              </li>
            </ul>
          </div>

          {/* Find Us On Column */}
          <div>
            <h3 className="font-semibold mb-4 text-[#F2EDED]">FIND US ON</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Image
                  src="/svg/tg.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Image
                  src="/svg/fb.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Image
                  src="/svg/reddit.svg"
                  alt="Reddit"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Image
                  src="/svg/medium.svg"
                  alt="Medium"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Image
                  src="/svg/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Image
                  src="/svg/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div>
        <div className="max-w-7xl mx-auto px-5 py-8">
          <div className="text-left max-w-4xl mx-auto mb-6 border-t border-[#838383] pt-6">
            <Image src="/gold_flaticon.png" alt="Logo" width={32} height={32} />
          </div>
          <p className="text-[#CCCCCC] text-sm text-justify max-w-4xl mx-auto mb-6">
            The information found on this website isn&apos;t applicable to a
            U.S. Person, residents of Canada or other Restricted Person and
            shall not be used or accessed in any country or jurisdiction where
            such use or access is not permitted under applicable law.
          </p>
          <p className="text-[#CCCCCC] text-sm text-justify max-w-4xl mx-auto mb-8">
            Photonics Gold is not an investment advisory service, or a
            registered investment advisor, or a trust, or a fund or
            broker-dealer and does not purport to tell or suggest which digital
            assets customers should buy or are themselves. Nothing on this
            Website shall be deemed to constitute a prospectus of any sort or a
            solicitation for investment, nor does it in any way pertain to an
            offering or a solicitation of an offer to buy any securities in any
            jurisdiction. The information on the Website is not composed in
            accordance with, and is not subject to, laws or regulations of any
            jurisdiction which prohibit or in any manner restrict transactions
            in respect to, or with use of, virtual currencies.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-sm text-gray-400">
            © 2023, Photonics Labs Ltd. All Rights Reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
