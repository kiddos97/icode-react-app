import Typed from "react-typed";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="w-full pt-60 md:h-screen bg-[#000] text-gray-300">
      <section className="p-4">
        <div className="max-w-[1000px] mx-auto px-8 text-center justify-center h-full">
          <header className="pl-4 py-7 flex flex-col items-center">
            <p className=" text-lg uppercase font-bold mb-6 text-green-300">
              Growing with Data Analytics
            </p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 mb-4">
              Cloud Hosting for Pros
            </h1>
            <p className="md:text-5xl sm:text-4xl text-xl font-bold mb-4">
              Fast, Flexible Cloud platforms for
              <Typed
                className="text-xl sm:text-4xl font-bold text-[#8892b0] pl-2"
                strings={["BTB.", "BTC.", "SASS."]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </p>
            <p className="text-xl font-bold mb-4">
              Monitor your cloud to increase revenue for BTB, BTC and SASS
              platforms.
            </p>
            <button className="text-black flex items-center rounded-lg px-6 py-3 my-2 bg-green-300">
              Get Started
              <span className="hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </header>
        </div>
      </section>
    </div>
  );
};

export default Hero;
