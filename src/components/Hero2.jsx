import React from 'react'

const Hero = ({ title, backgroundImage,para,para2 }) => {
  return (
    <div className='h-11~0'>
      <div
      className=" relative w-full h-90  flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    
      

      <h1 className="relative z-10 text-white text-3xl md:text-5xl mr-230 font-bold">
        {title}
      </h1>
    </div>
    <div className='flex justify-center items-center mt-40 text-gray-500'>
      <p>
        {para}
        <a href="/contact " className="ml-2 text-red-500 hover:underline">{para2}</a>
      </p>
    </div>
  


    </div>
  );
};

export default Hero;
