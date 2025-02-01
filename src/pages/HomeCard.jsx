import { FaArrowRight } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    title: "Digital Transformation",
    description: "Tackle Cloud migration & skill gaps",
    image: "https://media.istockphoto.com/id/1450969748/photo/developer-working-with-new-program.jpg?b=1&s=612x612&w=0&k=20&c=f1VAreml69K5fMxbwN8IoYed7x0bnF_zCJCnmHtPf84=",
  },
  {
    id: 2,
    title: "Upskill & Reskill",
    description: "Real-time chat apps, Node.js, GraphQL, React.",
    image: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "This is Deal-Drive",
    description: "This is Deal Drive, a quick introduction",
    image: "https://images.pexels.com/photos/1181268/pexels-photo-1181268.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const HomeCard = () => {
  return (
    <div className="w-full min-h-[300px] flex justify-center items-center">
      <div className="md:max-w-[1600px] p-4 mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="group w-full border border-[#1B454A] bg-white shadow-2xl hover:shadow-blue-600 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#1B454A] hover:text-white h-[400px] flex flex-col"
          >
            <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold transition-all duration-300 group-hover:text-white">
                {card.title}
              </h2>
              <p className="text-gray-600 transition-all duration-300 group-hover:text-white text-lg mt-2">
                {card.description}
              </p>
              <div className="flex items-center mt-auto transition-all duration-300 group-hover:text-white">
                <span className="text-sm font-medium text-gray-600 group-hover:text-white">
                  Learn More
                </span>
                <FaArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
