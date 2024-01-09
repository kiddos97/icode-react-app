const NewsLetter = () => {
  return (
    <div className="w-full py-16 bg-[#000] text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 md:grid-cols-1">
        <div className="md:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize flow?
          </h1>
          <p className="mb-4 font-bold">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="md:mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="text-black w-[50%] sm:flex items-center rounded-lg px-6 py-3 my-2 ml-4 bg-green-300">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
