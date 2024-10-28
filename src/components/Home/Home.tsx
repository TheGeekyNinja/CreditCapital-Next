import {
  // ArrowSmallRightIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import content from "./Content.json";

const Home = () => {
  return (
    <>
      <div className={`${styles["banner-gradients"]} p-5 pt-20`}>
        <div className="max-w-[100rem] mx-auto">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
            <div className="flex flex-col gap-8 w-full text-white">
              <p className="md:text-5xl text-4xl -mb-5">{content.banner.title}</p>
              <p className="md:text-5xl text-4x text-[#c2c2c2]">
                {content.banner.subtitle}
              </p>
              <p className="md:text-2xl text-lg">
                {content.banner.description}
              </p>
              <div className="flex gap-3 items-center">
                <a
                  href="#the-problem"
                  className="py-2 px-4 cursor-pointer rounded-full w-fit bg-yellow-400 text-[#003366]"
                >
                  {content.banner.buttonText}
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
        <div className="max-w-[50rem] mx-auto text-center">
          <p className="md:text-5xl text-4xl text-[#003366]">
            {content.PHTG.title}
          </p>
          <div className="flex sm:flex-row flex-col gap-5 my-20">
            {content.PHTG.features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-5 w-full p-5 hover:shadow duration-100 rounded-md hover:bg-gray-50">
                <Image
                  src={feature.icon}
                  className="h-40 w-fit mx-auto"
                  alt={feature.title}
                  width={160}
                  height={160}
                />
                <p className="text-[#003366] font-semibold text-xl">{feature.title}</p>
                <p>{feature.description}</p>
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
            <div className="flex flex-col gap-5 w-full">
              <p className="md:text-5xl text-4xl text-[#003366] mb-8">{content.problem.title}</p>
              {content.problem.description.map((problem, index) => (
                <div key={index}>
                  <p className="text-[#003366] font-bold text-xl mb-4">
                    {problem.heading}
                  </p>
                  <p className="md:text-xl text-lg">
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
              <p className="md:text-5xl text-4xl text-[#003366] mb-8">
                {content.solution.title}
              </p>
              {content.solution.description.map((item, index) => (
                <div key={index}>
                  <p className="text-[#003366] font-bold text-xl mb-4">
                    {item.heading}
                  </p>
                  <p className="md:text-xl text-lg">
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
          <p className="text-5xl text-[#53a9ff]">{content.benefits.title}</p>
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
                <p>{benefit.description}</p>
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
      <div className="px-5 py-20" id="faq">
        <div className="max-w-[100rem] mx-auto">
          <p className="md:text-5xl text-4xl mb-3 text-center text-[#003366]">
            Frequently asked questions
          </p>
          <br />
          <div className="flex flex-col gap-10">
            {content.faq.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="bg-[#E4E4E4] text-[#003366] p-2 rounded-md min-w-[2.5rem] text-center">
                  {index + 1}
                </div>
                <details className="w-full">
                  <summary className="text-[#003366] font-bold text-xl flex justify-between items-center w-full mb-3">
                    <p>{item.question}</p>
                    <div className="expand-arrow rounded-full p-1">
                      <ArrowDownIcon className="h-5 w-5" />
                    </div>
                  </summary>
                  <p className="md:text-xl text-lg">
                    {item.answer}
                  </p>
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
