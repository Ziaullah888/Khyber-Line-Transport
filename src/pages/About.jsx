import React from 'react';
import Hero2 from '../components/Hero2';
import Footer from '../components/Footer';
const About = () => {
  return (
    <div>
      <Hero2
        para={'Join over 5000 people who engage with sector.'}
        para2={'join now'}
        title="About Us"
        backgroundImage="https://khyberlinetransportservices.com/wp-content/uploads/2023/07/services-4.jpg"
      />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
