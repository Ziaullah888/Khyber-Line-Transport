import React from "react";
import { useParams } from "react-router-dom";
import updates from "../data/Updates";
import SearchSidebar from "../components/SearchSidebar";
import Hero from "../components/Hero2";
import Footer from "../components/Footer";

const UpdateDetail = () => {
  const { slug } = useParams();

  
  const update = updates.find((item) => item.slug === slug);

  if (!update) return ;

  return (
    <div>
  
      <Hero
        title="Blog Detail"
        backgroundImage="https://khyberlinetransportservices.com/wp-content/uploads/2023/07/services-4.jpg"
      />

    <div className="flex  lg:flex-row  gap-1 lg:px-20">
  {/* Main content */}
  <div className="flex flex-col gap-10 w-full lg:w-2/3 relative">
    
  
    <img
      src={update.image}
      alt={update.title}
      className="w-full h-[500px] object-cover rounded-xl mb-6 -translate-x-6 lg:-translate-x-12 "
    />

    <h1 className="text-4xl font-bold mb-3 lg:-translate-x-8">{update.title}</h1>

    
    <h1 className="font-medium text-xl lg:-translate-y-5 leading-relaxed pt-1 lg:-translate-x-8">{update.description}</h1>
    <p className="lg:-translate-x-9 lg:-translate-y-9 leading-relaxed text-gray-700">
  {update.intro}
</p>

    {update.sections &&
      update.sections.map((section, index) => (
        <div key={index} className="mb-8 lg:-translate-x-8">
          <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {section.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
<div className=" h-130 w-full  lg:-translate-x-9 mb-8">
  <h1 className="font-bold text-2xl">Write a Comment</h1>
  <p className="text-gray-400 pt-5">Your email address will not be published. Required fields are marked *</p>

  <form action=""
  className="gap-3"
  >
  <input type="text" 
  placeholder="Enter Name"
  className="w-80 p-4 focus:outline-none focus:ring-1 focus:ring-red-250 bg-gray-100 mb-4 mt-5 mr-7"
  />
  <input type="text" 
  placeholder="Enter Email"
  className="w-80 p-4 focus:outline-none focus:ring-1 focus:ring-red-250 bg-gray-100 mb-4 mt-5"
  />
  <input type="text" 
  placeholder="Enter Website"
  className="w-full p-4 focus:outline-none focus:ring-1 focus:ring-red-250 bg-gray-100 mb-4 mt-5 mr-7"
  />
  <br />
  <textarea
  placeholder="Enter Comment"
  className="w-full h-40 p-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-250 resize-none"
></textarea>
  <button
  type="submit"
  className="bg-red-600 text-white p-5 rounded-md mt-4 hover:bg-red-700 transition pb-5"
>
  Post Comment
</button>
  </form>
</div>
  </div>

  


  <SearchSidebar />

</div>
<Footer/>
    </div>
  );
};

export default UpdateDetail;