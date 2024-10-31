import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import content from "./content.json";

const Home = () => {
  return (
    <>
      <div className={`${styles["banner-gradients"]} p-5 pt-20`}>
        <div className="max-w-[100rem] mx-auto">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
            <div className="flex flex-col gap-8 w-full text-white">
              <p className="text-[83px] leading-[87px] -mb-5">
                {content.banner.title}
              </p>
              <p className="text-[83px] leading-[87px] text-[#c2c2c2]">
                {content.banner.subtitle}
              </p>
              <p className="text-[34px] leading-[46.44px]">
                {content.banner.description}
              </p>
              <div className="flex gap-3 items-center">
                <a
                  href="#the-problem"
                  className="py-2 px-4 cursor-pointer rounded-full w-fit bg-yellow-400 text-[#828280]"
                >
                  {content.banner.buttonText}
                </a>
              </div>
            </div>
            <div className="w-full">
              <div className="relative p-0">
                <Image src="/goldB.png" alt="Phone" width={995} height={849} />
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
                {content.about.description}
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
        <div className=" mx-auto text-center">
          <p className="text-[83px] text-[#003366]">
            {content.PHTG.title}
          </p>
          <div className="flex sm:flex-row flex-col gap-5 my-20">
            {content.PHTG.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 w-full p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50"
              >
                <Image
                  src={feature.icon}
                  className="h-40 w-fit mx-auto"
                  alt={feature.title}
                  width={160}
                  height={160}
                />
                <p className="text-[#003366] font-semibold text-xl">
                  {feature.title}
                </p>
                <p className="text-[#828280] align-middle">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-5 py-20 bg-[#EAE9E999]" id="the-problem">
        <div className="max-w-[100rem] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Image
              src={content.problem.image}
              className="md:w-full w-80"
              alt="Futuristic globe with servers"
              width={640}
              height={480}
            />
            <div className="flex flex-col gap-6 w-full">
              <p className="text-[#003366] text-[83px] px-6 font-light">
                {content.problem.title}
              </p>
              {content.problem.description.map((problem, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/check.png"
                      alt="Check"
                      width={24}
                      height={24}
                      className="text-blue-500"
                    />
                    <p className="text-[#003366] text-3xl font-medium">
                      {problem.heading}
                    </p>
                  </div>
                  <p className="text-[#6B7280] ml-9 text-2xl mt-4 font-light leading-[40px] text-justify">
                    {problem.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-20" id="the-solution">
        <div className="max-w-[100rem] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex flex-col gap-5 w-full">
              <p className="text-[#003366] text-[83px] font-light px-6">
                {content.solution.title}
              </p>
              {content.solution.description.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/check.png"
                      alt="Check"
                      width={24}
                      height={24}
                      className="text-blue-500"
                    />
                    <p className="text-[#003366] text-3xl font-medium">
                      {item.heading}
                    </p>
                  </div>
                  <p className="text-[#6B7280] ml-9 text-2xl mt-4 font-light leading-[40px] text-justify">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <Image
              src={content.solution.image}
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
          <p className="text-[83px] text-[#53a9ff]">{content.benefits.title}</p>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 my-20 text-white">
            {content.benefits.features.map((benefit, index) => (
              <div key={index} className="flex flex-col gap-5 px-8">
                <Image
                  src={benefit.icon}
                  className="h-40 w-fit mx-auto"
                  alt={benefit.title}
                  width={160}
                  height={160}
                />
                <p className="text-[#53a9ff] font-semibold text-xl">
                  {benefit.title}
                </p>
                <p className="text-[#D6D6D6]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={content.benefits.background}
          className="w-full absolute top-0 bottom-0 left-0 right-0 h-full object-cover z-0"
          alt="Benefits Banner Background"
          fill={true}
        />
      </div>
      {/* Onboarding */}
      <div
        className="flex flex-col items-center text-center max-w-6xl mx-auto py-20"
        id="onboarding"
      >
        <h2 className="text-[#003366] leading-[113.38px] text-[83px] font-normal mb-4">
          Onboarding <span className="text-[#0080FF]">Tokenholders</span>
        </h2>
        <p className="text-[#828280] leading-[32.78px] font-light text-2xl mb-16">
          {content.onboarding.description}
        </p>
        <div className="grid grid-cols-3 gap-8 mb-16">
          {/* First 3 steps in a row */}
          <div className="flex flex-col gap-8">
            {content.onboarding.steps.slice(0, 3).map((step, index) => (
              <div key={index} className="max-w-md text-right">
                <h3 className="text-[#003366] text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-[#6B7280] text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center section with image */}
          <div className="flex justify-center relative">
            <Image
              src={content.onboarding.image}
              alt="Onboarding Process"
              width={400}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Last 3 steps in a row */}
          <div className="flex flex-col gap-8">
            {content.onboarding.steps.slice(3).map((step, index) => (
              <div key={index} className="max-w-md text-left">
                <h3 className="text-[#003366] text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-[#6B7280] text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-[#6B7280] text-2xl leading-[30px] font-light">
          {content.onboarding.botDescription}
        </p>
      </div>
      {/* FAQ */}
      <div className="px-5 py-20 bg-[#FBFBFB]" id="faq">
        <div className="max-w-[100rem] mx-auto">
          <p className="text-[83px] mb-3 text-center text-[#003366]">
            Frequently asked questions
          </p>
          <br />
          <div className="flex flex-col gap-10">
            {content.faq.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                  {index + 1}
                </div>
                <details className="w-full group">
                  <summary className="group-open:text-[#003366] text-[#555555] font-medium text-3xl flex justify-between items-center w-full mb-5">
                    <p>{item.question}</p>
                    <div className="expand-arrow rounded-full p-1">
                      <ArrowDownCircleIcon className="h-5 w-5 group-open:hidden" />
                      <ArrowUpCircleIcon className="h-5 w-5 hidden group-open:block" />
                    </div>
                  </summary>
                  <p className="text-2xl text-[#828280] font-light">{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
