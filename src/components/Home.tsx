import { ArrowSmallRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Home = () => {

  return (
    <>
      <div className="bg-[#003366] p-5 banner-gradients pt-20">
        <div className="max-w-[100rem] mx-auto">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
            <div className="flex flex-col gap-8 w-full text-white">
              <p className="md:text-5xl text-4xl -mb-5">CreditCapital:</p>
              <p className="md:text-5xl text-4x text-[#c2c2c2]">
                Unleashing Liquidity, Empowering Token Holders
              </p>
              <p className="md:text-2xl text-lg">
                Transforming Large-scale Capital Investments Through Tokenization.
              </p>
              <div className="flex gap-3 items-center">
                <a
                  href="#the-problem"
                  className="py-2 px-4 cursor-pointer rounded-full w-fit bg-yellow-400 text-[#003366]"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full">
              <div className="relative md:w-fit w-80 mx-auto">
                <Image
                  className={styles.floatingPhone}
                  src="/phone.png"
                  alt="Phone"
                  width={320}
                  height={640}
                />
                <div className={`${styles.floatShadow} h-2 blur-md my-5 mx-auto rounded-full`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="px-5 py-20" id="about">
        <div className="max-w-[100rem] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 shadow-lg rounded-xl">
            <div className="flex flex-col gap-5 w-full p-5">
              <p className="md:text-3xl text-2xl text-[#003366]">
                An ecosystem where large-scale capital investments like bonds
                become liquid and accessible to a wider audience, facilitated by
                blockchain technology.
              </p>
            </div>
            <Image
              src="/tech_blue.png"
              className="md:w-full w-80"
              alt="Tech Blue"
              width={640}
              height={480}
            />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="px-5 py-20">
        <div className="max-w-[50rem] mx-auto text-center">
          <p className="md:text-5xl text-4xl text-[#003366]">
            About the Axos Token
          </p>
          <div className="flex sm:flex-row flex-col gap-5 my-20">
            <div className="flex flex-col gap-5 w-full p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50">
              <Image
                src="/pc_icon_blue.png"
                className="h-40 w-fit mx-auto"
                alt="Equity"
                width={160}
                height={160}
              />
              <p className="text-[#003366] font-semibold text-xl">Equity</p>
              <p>
                Holding CreditCapital&apos;s security tokens means owning equity
                rights and distribution benefits, allowing direct participation
                in our growing venture.
              </p>
            </div>
            <div className="flex flex-col gap-5 w-full p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50">
              <Image
                src="/chart_icon_blue.png"
                className="h-40 w-fit mx-auto"
                alt="Security Token"
                width={160}
                height={160}
              />
              <p className="text-[#003366] font-semibold text-xl">
                Security Token
              </p>
              <p>
                Our tokens represent the key to true ownership. Backed by
                tangible assets and governed by white-listed investor
                regulations, they reflect the true blend of digital currencies
                with traditional investments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-20 bg-[#EAE9E999]" id="the-problem">
        <div className="max-w-[100rem] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Image
              src="/globe_futuristic_servers.png"
              className="md:w-full w-80"
              alt="Futuristic globe with servers"
              width={640}
              height={480}
            />
            <div className="flex flex-col gap-5 w-full">
              <p className="md:text-5xl text-4xl text-[#003366]">The Problem</p>
              <p className="text-[#003366] font-bold text-xl">
                Illiquidity in Large-Scale Investments
              </p>
              <p className="md:text-xl text-lg">
                Large-scale capital investments face inherent challenges.
                Finding appropriate buyers and sellers becomes increasingly
                complex as transaction sizes grow, often leading to undesirable
                liquidity discounts.
              </p>
              <p className="text-[#003366] font-bold text-xl">
                Disproportional Value Loss
              </p>
              <p className="md:text-xl text-lg">
                Bigger sales often command lower value prices, owing to a
                limited buyer pool. This puts sellers at a significant
                disadvantage.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-20">
        <div className="max-w-[100rem] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex flex-col gap-5 w-full">
              <p className="md:text-5xl text-4xl text-[#003366]">
                The Solution
              </p>
              <p className="text-[#003366] font-bold text-xl">Tokenization</p>
              <p className="md:text-xl text-lg">
                By tokenizing assets, we significantly expand the buyer pool,
                curbing the negative impacts of liquidity discounts. This way,
                sellers lose less on value, and the market gets a fair chance to
                determine the true worth of the assets.
              </p>
              <p className="text-[#003366] font-bold text-xl">
                True Market Value
              </p>
              <p className="md:text-xl text-lg">
                If a recurring revenue asset proves valuable, its tokens meet
                their genuine market value, eliminating the detrimental effects
                of illiquidity.
              </p>
            </div>
            <Image
              src="/pay_now_phone.png"
              className="md:w-full w-80"
              alt="Pay Now Phone"
              width={640}
              height={480}
            />
          </div>
        </div>
      </div>

      <div
        className="px-5 py-20 benefits_banner relative bg-black"
        id="benefits"
      >
        <div className="max-w-[100rem] mx-auto text-center z-20 relative">
          <p className="text-5xl text-[#53a9ff]">Benefits</p>
          <div className="flex sm:flex-row flex-col gap-5 my-20 text-white">
            <div className="flex flex-col gap-5">
              <Image
                src="/pc_icon_white.png"
                className="h-40 w-fit mx-auto"
                alt="Minimized Liquidity Discount"
                width={160}
                height={160}
              />
              <p className="text-[#53a9ff] font-semibold text-xl">
                Minimized Liquidity Discount
              </p>
              <p>
                By tokenizing your large assets, you bypass the disadvantages of
                the typical liquidity discount associated with big sales.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <Image
                src="/chart_icon_white.png"
                className="h-40 w-fit mx-auto"
                alt="Recurring Revenue"
                width={160}
                height={160}
              />
              <p className="text-[#53a9ff] font-semibold text-xl">
                Recurring Revenue
              </p>
              <p>
                Our unique model empowers individuals with the opportunity to
                earn recurring revenue.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <Image
                src="/pie_icon_white.png"
                className="w-40 mx-auto"
                alt="Securitized Asset Value"
                width={160}
                height={160}
              />
              <p className="text-[#53a9ff] font-semibold text-xl">
                Securitized Asset Value
              </p>
              <p>
                The combination of market value and a dividend value gives our
                securitized assets a unique and realistic valuation.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/benefits_banner_bg.png"
          className="w-full absolute top-0 bottom-0 left-0 right-0 h-full object-cover z-0"
          alt="Benefits Banner Background"
          fill={true}
        />
      </div>
      <div className="px-5 py-20">
        <div className="max-w-[100rem] mx-auto">
          <p className="md:text-5xl text-4xl text-center text-[#003366]">
            Onboarding <span className="text-[#0080ff]">Assets</span>
          </p>
          <br />
          <p className="text-center">
            You, as an asset owner, bring your assets to Credit Capital. We take
            over from there, tokenizing your assets and issuing you an
            equivalent number of tokens.
          </p>
          <br />
          <div className="flex flex-col sm:flex-row gap-10 items-center">
            <div className="sm:text-right w-full">
              <div className="p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50">
                <p className="text-[#003366] font-bold text-xl">
                  Asset Introduction
                </p>
                <p className="md:text-xl text-lg">
                  Your journey begins with introducing your assets to
                  CreditCapital. As an asset owner, you will need to provide
                  detailed information about your capital investment, such as
                  the type of asset, its current value, and its
                  revenue-generating history, if applicable.
                </p>
              </div>
              <br />
              <div className="p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50">
                <p className="text-[#003366] font-bold text-xl">
                  Asset Evaluation
                </p>
                <p className="md:text-xl text-lg">
                  Our team of seasoned finance and blockchain professionals will
                  thoroughly evaluate your asset, determining its potential for
                  tokenization and its potential value in the token market.
                </p>
              </div>
              <br />
              <div className="p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50">
                <p className="text-[#003366] font-bold text-xl">
                  Tokenization Process
                </p>
                <p className="md:text-xl text-lg">
                  Once your asset meets our evaluation criteria, we will move
                  forward with the tokenization process. This involves digitally
                  representing your asset as security tokens on the blockchain.
                  Each token will embody a proportional ownership stake in your
                  asset, thus democratizing access to your capital investment.
                </p>
              </div>
            </div>

            <Image
              src="/phone_credit_card_receipt.png"
              className="w-96 h-auto lg:block hidden"
              alt="Phone Credit Card Receipt"
              width={640}
              height={480}
            />

            <div className="w-full">
              <div className="p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50">
                <p className="text-[#003366] font-bold text-xl">
                  Token Issuance
                </p>
                <p className="md:text-xl text-lg">
                  After successful tokenization, you will be issued tokens
                  equivalent to the value of your asset. You become the rightful
                  owner of these tokens and can choose to keep them to earn
                  revenue or trade them through a liquidity pool pair.
                </p>
              </div>
              <br />
              <div className="p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50">
                <p className="text-[#003366] font-bold text-xl">
                  Asset Management
                </p>
                <p className="md:text-xl text-lg">
                  As your asset is now part of the CreditCapital ecosystem, our
                  expert team will oversee its management. This includes
                  monitoring the performance of the tokenized asset, managing
                  the liquidity pool, and ensuring timely revenue distribution
                  among token holders.
                </p>
              </div>
              <br />
              <div className="p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50">
                <p className="text-[#003366] font-bold text-xl">
                  Regular Updates and Reports
                </p>
                <p className="md:text-xl text-lg">
                  You will receive regular updates and detailed reports on the
                  performance of your tokenized asset, revenue distributions,
                  market trends, and valuable insights to help you make informed
                  decisions regarding your token holdings.
                </p>
              </div>
            </div>
          </div>
          <br />
          <p className="text-center">
            By tokenizing your assets with CreditCapital, you&apos;re not only
            enhancing your asset&apos;s liquidity but also opening up new
            avenues for revenue generation and expanding the potential investor
            pool. This ultimately leads to a better valuation of your asset and
            provides an innovative way to optimize your capital investments.
          </p>
        </div>
      </div>
      {/* Section 9: Contact Form */}
      <div className="px-5 py-20 bg-[#EAE9E999]" id="contact">
        <div className="max-w-[50rem] mx-auto">
          <div className="flex flex-col gap-5 w-full">
            <p className="md:text-5xl text-4xl text-[#003366] text-center">
              Would you like to know more?
            </p>
            <p className="text-center text-[#003366]">
              Stay up to date to learn more about our next big steps:
            </p>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border-2 border-[#003366]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border-2 border-[#003366]"
              />
            </div>
            <input
              type="text"
              placeholder="Your Email"
              className="w-full p-3 border-2 border-[#003366]"
            />
            <textarea
              cols={30}
              rows={10}
              placeholder="Your Message"
              className="resize-none p-3 border-2 border-[#003366]"
            ></textarea>
            <div className="bg-[#ffd700] text-[#003366] flex gap-2 items-center mx-auto rounded-full py-2 px-4 cursor-pointer">
              <p>Send</p>
              <ArrowSmallRightIcon className="h-5 w-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-20" id="faq">
        <div className="max-w-[100rem] mx-auto">
          <p className="md:text-5xl text-4xl mb-3 text-center text-[#003366]">
            Frequently asked questions
          </p>
          <br />
          <div className="flex flex-col gap-10">
            <div className="flex gap-3 items-start">
              <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                1
              </div>
              <details className="w-full">
                <summary
                  className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3"
            >
              <p>How exactly does tokenization work?</p>
                  <div className="expand-arrow rounded-full p-1">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                </summary>
                <p className="md:text-xl text-lg">
                  Tokenization involves transforming the value of an asset into a format that can be
                  represented digitally. With CreditCapital, assets are converted into security tokens
                  that represent equivalent ownership stakes.
            </p>
          </details>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                2
              </div>
              <details className="w-full">
                <summary
                  className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3"
                >
                  <p>What is the criteria for asset tokenization?</p>
                  <div className="expand-arrow rounded-full p-1">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                </summary>
                <p className="md:text-xl text-lg">
                  While the specific criteria can vary, typically, any asset with
                  demonstrable value can be tokenized. Credit Capital focuses
                  primarily on large-scale capital investments like bonds. For
                  detailed criteria, you should contact Capital Alliance directly.
                  Note that Credit Capital also allows participation through OTC
                  trades of normal crypto.
            </p>
          </details>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                3
              </div>
              <details className="w-full">
                <summary
                  className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3"
                >
                  <p>What are the risks involved?</p>
              <div className="expand-arrow rounded-full p-1">
                <ArrowDownIcon className="h-5 w-5" />
              </div>
                </summary>
                <p className="md:text-xl text-lg">
                  Like any investment, tokenization involves risks, such as market
                  volatility influencing token value. However, Capital Alliance
                  mitigates these risks with a robust bond guarantee system
                  backed by a fund of tokens, ensuring smooth operations and
                  securing investor interests.
            </p>
          </details>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                4
              </div>
              <details className="w-full">
                <summary
                  className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3"
                >
                  <p>What is a white-listed investor?</p>
              <div className="expand-arrow rounded-full p-1">
                <ArrowDownIcon className="h-5 w-5" />
              </div>
            </summary>
            <p className="md:text-xl text-lg">
              A white-listed investor is a verified investor who has completed industry-standard
              Know Your Customer (KYC) procedures, which helps prevent fraud and ensures compliance
              with regulations.
            </p>
          </details>
        </div>
        <div className="flex gap-3 items-start">
          <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">5</div>
          <details className="w-full">
            <summary
              className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3"
            >
              <p>What happens if the value of the tokenized asset drops significantly?</p>
              <div className="expand-arrow rounded-full p-1">
                <ArrowDownIcon className="h-5 w-5" />
              </div>
            </summary>
            <p className="md:text-xl text-lg">
              The value of a token is linked to the asset it represents. If the value of the asset
              drops significantly, the token&apos;s value would likely reflect that decrease. However,
              Capital Alliance&apos;s model provides a measure of protection, with token holders also
              benefiting from potential recurring revenue streams from the staked tokens.
            </p>
          </details>
        </div>
        <div className="flex gap-3 items-start">
          <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">6</div>
          <details className="w-full">
            <summary
              className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3"
            >
              <p>How does vesting work?</p>
              <div className="expand-arrow rounded-full p-1">
                <ArrowDownIcon className="h-5 w-5" />
              </div>
            </summary>
            <p className="md:text-xl text-lg">
              When you receive minted tokens from the protocol, they will have a vesting timer on them, which keeps
              them locked in your wallet. You can still earn revenue from them during this time, 
              you just can&apos;t transfer them. As the timer ticks down, they will progressively unlock
              for normal use.
            </p>
          </details>
        </div>
        <div className="flex gap-3 items-start">
          <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">7</div>
          <details className="w-full">
            <summary
              className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3"
            >
              <p>What is the legal standing of owning tokens?</p>
              <div className="expand-arrow rounded-full p-1">
                <ArrowDownIcon className="h-5 w-5" />
              </div>
            </summary>
            <p className="md:text-xl text-lg">
              Credit Capital&apos;s tokens represent equity ownership in the company, held by a licensed
              Trust Company as a fiduciary on behalf of token holders. Therefore, token holders have
              legal rights akin to shareholders, such as voting rights and revenue distribution
              rights.
            </p>
          </details>
        </div>
        <div className="flex gap-3 items-start">
          <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">8</div>
          <details className="w-full">
            <summary
              className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3"
            >
              <p>
                What is the taxation situation for profits earned through holding or selling tokens?
              </p>
              <div className="expand-arrow rounded-full p-1">
                <ArrowDownIcon className="h-5 w-5" />
              </div>
            </summary>
            <p className="md:text-xl text-lg">
              As with most investments, profits from holding or selling tokens are likely to be
              subject to tax laws. The exact tax implications depend on jurisdiction and individual
              circumstances. With CreditCapital&apos;s system, tax events may be deferred until users
              withdraw their dividends (though this will be dependent on local laws), giving token
              holders control over the timing of their tax obligations.
            </p>
          </details>
        </div>
        <div className="flex gap-3 items-start">
          <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">9</div>
          <details className="w-full">
            <summary
              className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3"
            >
              <p>How liquid are the tokens?</p>
              <div className="expand-arrow rounded-full p-1">
                <ArrowDownIcon className="h-5 w-5" />
              </div>
            </summary>
            <p className="md:text-xl text-lg">
              Credit Capital&apos;s model aims to increase the liquidity of tokens by funding liquidity
              pools on popular exchanges. Since there is an incentive to hold Axos tokens: the revenue
              distribution, activity on those pairs is also incentivized. These conditions ensure a liquid
              market for Axos.
            </p>
          </details>
        </div>
        <div className="flex gap-3 items-start">
          <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
            10
          </div>
          <details className="w-full">
            <summary
              className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3"
            >
              <p>
                What is the technical infrastructure supporting the tokenization and trading
                process?
              </p>
              <div className="expand-arrow rounded-full p-1">
                <ArrowDownIcon className="h-5 w-5" />
              </div>
            </summary>
            <p className="md:text-xl text-lg">
              Credit Capital deploys ERC-3643 (“T-REX”) compliant security tokens on the Polygon
              or Ethereum blockchain, both renowned for their robustness and security. The platform
              ensures compliance through industry-standard KYC requirements, and dividends are
              managed and allocated through smart contracts.
            </p>
          </details>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Home;
