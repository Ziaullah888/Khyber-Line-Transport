import React from 'react';

const Hero = () => {
  return (
    <div className="flex relative z-30 justify-center items-center mt-50 h-80 px-6">
      <div className="pb-40 text-center space-y-4">
        <h1 className="font-bold text-6xl pb-2">FAQS</h1>

        <p className="text-gray-500 font-medium leading-relaxed">
          Find quick answers to the most common questions about our{' '}
          <span className="font-bold">
            water tanker services, chiller van rentals, pickup trucks,
          </span>{' '}
          and <span className="font-bold">heavy equipment transport</span>{' '}
          across the UAE. Learn more about our 24/7 availability, certified
          services, and how we support busine sses and households throughout
          Dubai, Sharjah, Ajman, and Abu Dhabi.
        </p>
      </div>
    </div>
  );
};

export default Hero;
