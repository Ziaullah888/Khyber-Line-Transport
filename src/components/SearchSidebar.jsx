import React from 'react';
import { Link } from 'react-router-dom';
import updates from '../data/Updates';

const SearchSidebar = () => {
  const tags = [
    'Air',
    'Business',
    'Cargo',
    'Digital',
    'Heavy Machinery Rental',
    'Logistic & Idea',
    'Service',
    'Sweet Water Tanker Dubai',
    'Transport',
    'Water Tanker Supplier in Dubai',
  ];

  return (
    <div className="space-y-8  space-x-10 w-90 lg:translate-x-3">
      <div className="bg-gray-100 shadow-md p-6 rounded-2xl w-full">
        <h3 className="text-lg font-semibold mb-4 pb-2">Search</h3>
        <form className="flex flex-col gap-3 w-full">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg font-medium"
          >
            Search
          </button>
        </form>
      </div>

      <div className="bg-gray-100 shadow-md p-6 rounded-2xl w-full">
        <h3 className="text-lg font-semibold mb-4 pb-2">Recent Posts</h3>
        <ul className="space-y-4 w-full">
          {updates.slice(0, 6).map((post) => (
            <li key={post.id} className="group">
              <Link
                to={`/updates/${post.slug}`}
                className="text-sm font-medium text-gray-500 group-hover:text-red-700 transition w-full p-2 block"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 shadow-md p-6 rounded-2xl w-full">
        <h3 className="text-lg font-semibold mb-4 pb-2">Search</h3>
        <form className="flex flex-col gap-3 w-full">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-red-600  transition text-white py-2 rounded-lg font-medium"
          >
            Search
          </button>
        </form>
      </div>

      <div className="bg-gray-100 shadow-md p-6 rounded-2xl w-full">
        <h3 className="text-lg font-semibold mb-4 pb-2">Categories</h3>
        <ul className="text-sm font-medium text-gray-800 space-y-4 w-full">
          <li>
            <Link
              to={'/updates?category=Application'}
              className="hover:text-red-600 cursor-pointer text-gray-500"
            >
              Application
            </Link>
          </li>
          <li>
            <Link
              to={'/updates?category=Business'}
              className="hover:text-red-600 cursor-pointer text-gray-500"
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              to={'/updates?category=Business Transport'}
              className="hover:text-red-600 cursor-pointer text-gray-500"
            >
              Business Transport
            </Link>
          </li>
          <li>
            <Link
              to={'/updates?category=Logistics'}
              className="hover:text-red-600 cursor-pointer text-gray-500"
            >
              Logistics
            </Link>
          </li>
          <li>
            <Link
              to={'/updates?category=Marketing'}
              className="hover:text-red-600 cursor-pointer text-gray-500"
            >
              Marketing
            </Link>
          </li>
          <li>
            <Link
              to={'/updates?category=Rail freight'}
              className="hover:text-red-600 cursor-pointer text-gray-500"
            >
              Rail freight
            </Link>
          </li>
          <li>
            <Link
              to={'/updates?category=Uncategorized'}
              className="hover:text-red-600 cursor-pointer text-gray-500"
            >
              Uncategorized
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 shadow-md p-6 rounded-2xl w-full">
        <h3 className="text-lg font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2 w-full">
          {tags.map((tag, idx) => (
            <Link
              key={idx}
              to={`/updates?tag=${encodeURIComponent(tag)}`}
              className="text-sm bg-white py-1 px-3 rounded-full border border-gray-300 cursor-pointer hover:bg-blue-100 transition"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;
