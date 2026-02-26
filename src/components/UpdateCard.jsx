import { Link } from "react-router-dom";

const UpdateCard = ({ update }) => {
  return (
    <div className="flex gap-6 mb-10">
      
      <div className="w-1/3">
        <img
          src={update.image}
          alt={update.title}
          className="rounded-xl object-cover w-full h-48"
        />
      </div>

      
      <div className="w-2/3">
        <p className="text-sm text-gray-500">{update.date}</p>

        <Link to={`/updates/${update.slug}`}>
          <h2 className="text-2xl font-semibold hover:text-blue-600 transition">
            {update.title}
          </h2>
        </Link>

        <p className="text-gray-600 mt-3">{update.description}</p>

        <Link
          to={`/updates/${update.slug}`}
          className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default UpdateCard;
