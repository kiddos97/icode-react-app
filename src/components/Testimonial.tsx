import { HiArrowNarrowRight } from "react-icons/hi";
import laptop from "../assets/laptop.jpg";

const Testimonial = () => {
  return (
    <div className="w-full bg-[#fff] py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        {/* Content */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img src={laptop} alt="laptop" className="w-[500px] mx-auto my-4" />
          </div>
          <div className="p-4">
            <h2 className="text-xl uppercase font-bold text-green-400 md:text-4xl sm:text-7xl">
              Data Analytics Dashboard
            </h2>
            <p className="text-lg font-bold text-black mb-2">
              Manage Cloud Centrally
            </p>
            <p className="text-lg mb-4 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              cupiditate pariatur, consectetur eveniet consequatur accusamus
              voluptas omnis veniam necessitatibus nemo nisi magni delectus
              tempore, fuga, repellat culpa ad quisquam asperiores? Excepturi
              nemo soluta nisi beatae id voluptatum ex ipsam esse autem!
              Voluptas porro fuga saepe, dolor animi dignissimos ducimus
              possimus.
            </p>
            <button className="text-green-300 flex items-center rounded-lg px-6 py-3 my-2 bg-black">
              Get Started
              <span className="hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
