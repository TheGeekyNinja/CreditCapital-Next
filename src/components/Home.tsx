import {
  ArrowSmallRightIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <>
      <div className={`${styles["banner-gradients"]} p-5 pt-20`}>
        <div className="max-w-[100rem] mx-auto">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
            <div className="flex flex-col gap-8 w-full text-white">
              <p className="md:text-5xl text-4xl -mb-5">Photonics Labs:</p>
              <p className="md:text-5xl text-4x text-[#c2c2c2]">
                Unleashing Gold Liquidity, Empowering Token Holders
              </p>
              <p className="md:text-2xl text-lg">
                Transforming Large-scale Metal Reserves Through Tokenization
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
                <div
                  className={`${styles.floatShadow} h-2 blur-md my-5 mx-auto rounded-full`}
                ></div>
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
                An ecosystem where both large-scale gold reserves support
                a token with the , all facilitated by
                EVM blockchain technology and Chainlink's oracle service.
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
            About the Photonics Labs Token
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
              <p className="text-[#003366] font-semibold text-xl">Price Exposure</p>
              <p>
                Holding Photonics' tokens means owning an overcollateralized gold derivative,
                giving you secure exposure to the price of gold.
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
                 Token
              </p>
              <p>
                PGLD tokens represent an interest Photonics' underlying assets under management. Photonics holds
                gold reserves in a trust. The PGLD token is deployed on the Polygon blockchain, and
                whitelisted, meaning only wallets that pass our KYC process can hold or trade it.
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
                Gold Peg
              </p>
              <p>
                Our gold reserves are tokenized at a one-to-one ratio, so that one token is equivalent
                to one oz of gold. This is maintained by a automated market maker (trading bot).
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
                Illiquidity of Gold Reserves
              </p>
              <p className="md:text-xl text-lg">
                Illiquidity in large-scale gold reserves: precious metal investments face inherent
                challenges. Extracting resources like these from their sites is expensive, and impacts the
                environment. Not to mention the cost and logistics of storing gold in a vault or taking
                delivery of it, which often leads to undesirable price discounts.
              </p>
              <p className="text-[#003366] font-bold text-xl">
                Logistical Costs of Bullion Reserves
              </p>
              <p className="md:text-xl text-lg">
                Storing gold in a vault for backing purposes is costly, and creates problems associated with
                taking delivery or selling the physical asset.
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
                Photonics' token, PGLD, derives value from a gold reserve through a
                relationship between our smart contracts and a trust. The combined
                DCF gold reserves asset is being transferred to a Wyoming LLC, of which
                its equity securities will be tokenized, and will be promoted through a
                Private Placement offering under SEC Regulation D, Rule 506(c), and
                Regulation S for non-US investors.
              </p>
              <p className="text-[#003366] font-bold text-xl">
                Gold-Oz-Price Peg
              </p>
              <p className="md:text-xl text-lg">
                Through both the proportion of the initial supply mint, and the liquidity pool
                where Axos Gold Token is listed, a peg is maintained between the price of PGLD and the per-oz price of gold.
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
        <div className="max-w-[70rem] mx-auto text-center z-20 relative">
          <p className="text-5xl text-[#53a9ff]">Benefits</p>
          <div className="flex sm:flex-row flex-col gap-5 my-20 text-white">
            <div className="flex flex-col gap-5 px-8">
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
            <div className="flex flex-col gap-5 px-8">
              <Image
                src="/chart_icon_white.png"
                className="h-40 w-fit mx-auto"
                alt="Redemption Mechanism"
                width={160}
                height={160}
              />
              <p className="text-[#53a9ff] font-semibold text-xl">
                Redemption Mechanism
              </p>
              <p>
                Instead of dealing with a redemption process where you must take
                delivery of physical gold, a liquidity pool allows you to sell
                this combination of the two for ETH or stablecoins.
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-5 my-20 text-white">
          <div className="flex flex-col gap-5 px-8">
              <Image
                src="/pie_icon_white.png"
                className="w-40 mx-auto"
                alt="Overcollateralization"
                width={160}
                height={160}
              />
              <p className="text-[#53a9ff] font-semibold text-xl">
                Overcollateralization
              </p>
              <p>
                The amounts of actual gold backing your tokens are many times
                higher than the total token supply. Since the gold reserves in
                the mine have been appraised with a discounted cash flow (DCF)
                at a 90% rate, AGT is heavily overcollateralized.
              </p>
            </div>
            <div className="flex flex-col gap-5 px-8">
              <Image
                src="/pie_icon_white.png"
                className="w-40 mx-auto"
                alt="AUM Value Revenue Share"
                width={160}
                height={160}
              />
              <p className="text-[#53a9ff] font-semibold text-xl">
                AUM Value Revenue Share
              </p>
              <p>
                1% of the value of the assets under management by Axos Gold (our gold reserves)
                is dispensed as ETH to all token holders. This is done proportionally, based on what
                percentage of the total circulating supply you hold, and is dispensed on a monthly basis.
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
            Onboarding <span className="text-[#0080ff]">Tokenholders</span>
          </p>
          <br />
          <p className="text-center">
            Your avenue to buying PGLD tokens is the liquidity pool on Uniswap,
            a decentralized exchange where we have listed the Photonics Labs Gold Token.
          </p>
          <br />
          <div className="flex flex-col sm:flex-row gap-10 items-center">
            <div className="sm:text-right w-full">
              <div className="p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50">
                <p className="text-[#003366] font-bold text-xl">
                  Crypto Onramping
                </p>
                <p className="md:text-xl text-lg">
                  Your journey begins with converting your capital to POL or Wrapped ETH on the Polygon network.
                  This 
                </p>
              </div>
              <br />
              <div className="p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50">
                <p className="text-[#003366] font-bold text-xl">
                  Reserve Evaluation
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
                  representing your asset as commodity tokens on the blockchain.
                  Each token will embody a proportional ownership stake in your
                  asset, thus democratizing access to the reserves.
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
                  equivalent to the DCF value of your gold reserve. You become
                  the rightful owner of these tokens and can choose to trade or
                  stake them in our liquidity pool.
                </p>
              </div>
              <br />
              <div className="p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50">
                <p className="text-[#003366] font-bold text-xl">
                  Asset Management
                </p>
                <p className="md:text-xl text-lg">
                  As your asset is now part of the Axos Gold ecosystem, our
                  expert team will oversee its management. This includes
                  monitoring the performance of the tokenized asset, managing
                  the liquidity pool, and ensuring timely revenue distribution
                  among token holders
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
            By tokenizing your assets with Axos Gold, you&apos;re not only
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
                <summary className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3">
                  <p>How exactly does tokenization work?</p>
                  <div className="expand-arrow rounded-full p-1">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                </summary>
                <p className="md:text-xl text-lg">
                  Tokenization involves transforming the value of an asset into
                  a format that can be represented digitally. With AxosGold,
                  assets are converted into security tokens that represent
                  equivalent ownership stakes.
                </p>
              </details>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                2
              </div>
              <details className="w-full">
                <summary className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3">
                  <p>What is the criteria for asset tokenization?</p>
                  <div className="expand-arrow rounded-full p-1">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                </summary>
                <p className="md:text-xl text-lg">
                  While the specific criteria can vary, typically, any asset
                  with demonstrable value can be tokenized. Axos Gold focuses
                  primarily on large-scale capital investments like bonds. For
                  detailed criteria, you should contact Capital Alliance
                  directly. Note that Axos Gold also allows participation
                  through OTC trades of normal crypto.
                </p>
              </details>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                3
              </div>
              <details className="w-full">
                <summary className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3">
                  <p>What are the risks involved?</p>
                  <div className="expand-arrow rounded-full p-1">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                </summary>
                <p className="md:text-xl text-lg">
                  Like any investment, tokenization involves risks, such as
                  market volatility influencing token value. However, Axos Gold
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
                <summary className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3">
                  <p>What is a white-listed investor?</p>
                  <div className="expand-arrow rounded-full p-1">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                </summary>
                <p className="md:text-xl text-lg">
                  A white-listed investor is a verified investor who has
                  completed industry-standard Know Your Customer (KYC)
                  procedures, which helps prevent fraud and ensures compliance
                  with regulations.
                </p>
              </details>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                5
              </div>
              <details className="w-full">
                <summary className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3">
                  <p>
                    What happens if the value of the tokenized asset drops
                    significantly?
                  </p>
                  <div className="expand-arrow rounded-full p-1">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                </summary>
                <p className="md:text-xl text-lg">
                  The value of a token is linked to oz price of gold. If the
                  value of of gold drops significantly, AGT would likely reflect
                  that decrease. If the price drop is because of a
                  &quot;de-peg&quot;, the price of the toking moving too far
                  away from the gold price, that&apos;s when Axos Gold would
                  automatically trade the pair using our cash-on-hand, to bring
                  it back into sync. Our systems have threshholds set for this,
                  such that the price is allowed to de-peg only very slightly,
                  but would be prevented from diverging drastically.
                </p>
              </details>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                6
              </div>
              <details className="w-full">
                <summary className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3">
                  <p>How does vesting work?</p>
                  <div className="expand-arrow rounded-full p-1">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                </summary>
                <p className="md:text-xl text-lg">
                  When you receive minted tokens from the protocol, they will
                  have a lock timer on them, which prevents you from
                  transferring out of your wallet. You can still earn revenue
                  from them during this time, you just can&apos;t transfer them.
                  As the timer ticks down, they will progressively unlock for
                  normal use, and you&apos;ll be able to trade with them on the
                  LP.
                </p>
              </details>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                7
              </div>
              <details className="w-full">
                <summary className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3">
                  <p>What is the legal standing of owning tokens?</p>
                  <div className="expand-arrow rounded-full p-1">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                </summary>
                <p className="md:text-xl text-lg">
                  Axos Gold&apos;s tokens represent equity ownership in the
                  company, held by a licensed Trust Company as a fiduciary on
                  behalf of token holders. Therefore, token holders have legal
                  rights akin to shareholders, such as voting rights and revenue
                  distribution rights.
                </p>
              </details>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                8
              </div>
              <details className="w-full">
                <summary className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3">
                  <p>
                    What is the taxation situation for profits earned through
                    holding or selling tokens?
                  </p>
                  <div className="expand-arrow rounded-full p-1">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                </summary>
                <p className="md:text-xl text-lg">
                  As with most investments, profits from holding or selling
                  tokens are likely to be subject to tax laws. The exact tax
                  implications depend on jurisdiction and individual
                  circumstances. With Axos Gold&apos;s system, tax events may be
                  deferred until users withdraw their dividends (though this
                  will be dependent on local laws), giving token holders control
                  over the timing of their tax obligations.
                </p>
              </details>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                9
              </div>
              <details className="w-full">
                <summary className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3">
                  <p>How liquid are the tokens?</p>
                  <div className="expand-arrow rounded-full p-1">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                </summary>
                <p className="md:text-xl text-lg">
                  Axos Gold&apos;s model aims to increase the liquidity of
                  tokens by funding liquidity pools on popular exchanges. Since
                  there is an incentive to hold AGT: the revenue distribution,
                  this incentivizes activity on those pairs also. These
                  conditions ensure a liquid market for Axos Gold.
                </p>
              </details>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                10
              </div>
              <details className="w-full">
                <summary className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3">
                  <p>
                    What is the technical infrastructure supporting the
                    tokenization and trading process?
                  </p>
                  <div className="expand-arrow rounded-full p-1">
                    <ArrowDownIcon className="h-5 w-5" />
                  </div>
                </summary>
                <p className="md:text-xl text-lg">
                  Axos Gold deployed AGT as an ERC-20 token on the Polygon
                  blockchain, renowned for its robustness and security. The
                  platform ensures compliance through an address whitelist, and
                  dividends are managed and allocated through smart contracts.
                  The tokens are listed on Uniswap, the largest decentralized
                  exchange currently in operation on Polygon.
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
