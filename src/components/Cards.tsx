import { card } from "../project/card";

const CardBody = ({ img, heading2, p1, p2, p3, p4, button }) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 bg-gray-100 rounded-lg hover:scale-105 duration-500">
      <img
        className="w-20 mx-auto mt-[-3rem] bg-transparent"
        src={img}
        alt="/"
      />
      <h2 className="text-2xl font-bold text-center py-8">{heading2}</h2>
      <p className="text-center text-4xl font-bold">{p1}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 font-bold">{p2}</p>
        <p className="py-2 border-b mx-8 font-bold">{p3}</p>
        <p className="py-2 border-b mx-8 font-bold">{p4}</p>
      </div>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
        {button}
      </button>
    </div>
  );
};

const cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {card.map((cards, index) => (
          <CardBody key={index} {...cards} />
        ))}
      </div>
    </div>
  );
};

export default cards;
// for Tommorrow render card component
