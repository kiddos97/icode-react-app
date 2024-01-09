const Search = () => {
  return (
    <div className="w-full md:h-full bg-[#000] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <section className="p-4">
          <header className="mb-6">
            <h2 className="text-3xl text-center sm:text-6xl font-bold">
              Starting at $9 per month
            </h2>
            <p className="text-xl text-center pl-3 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              maiores.
            </p>
          </header>
          <div className="flex justify-center items-center">
            <input
              className="rounded-lg shadow-lg p-2 text-gray-500"
              type="text"
              placeholder="Enter domain name..."
            />
            <button
              className="text-black rounded-lg px-6 py-3 ml-2 bg-green-300"
              type="button"
            >
              Search
            </button>
          </div>
          <ul className="grid grid-cols-2 justify-items-center sm:flex justify-center items-center mt-4">
            <li className="py-6 font-bold">
              <span className="hover:bg-green-300 hover:text-black rounded-lg text-gray-300 p-2">
                .com $9
              </span>
            </li>
            <li className="py-6 font-bold">
              <span className="hover:bg-green-300 hover:text-black rounded-lg text-gray-300 p-2">
                .sg $10
              </span>
            </li>
            <li className="py-6 font-bold">
              <span className="hover:bg-green-300 hover:text-black rounded-lg text-gray-300 p-2">
                .space $11
              </span>
            </li>
            <li className="py-6 font-bold">
              <span className="hover:bg-green-300 hover:text-black rounded-lg text-gray-300 p-2">
                .info $14
              </span>
            </li>
            <li className="py-6 font-bold">
              <span className="hover:bg-green-300 hover:text-black rounded-lg text-gray-300 p-2">
                .net $10
              </span>
            </li>
            <li className="py-6 font-bold">
              <span className="hover:bg-green-300 hover:text-black rounded-lg text-gray-300 p-2">
                .xyz $10
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Search;
