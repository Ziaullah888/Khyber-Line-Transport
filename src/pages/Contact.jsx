import React from 'react';
import Hero from '../components/Hero2';
import Footer from '../components/Footer';
import Map from '../components/ContactMap';

const Contact = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        backgroundImage="https://khyberlinetransportservices.com/wp-content/uploads/2023/07/services-4.jpg"
      />
      <Map mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7269.038524116497!2d54.48168008727815!3d24.363233336486765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40fcf06c84c1%3A0x4d5c65ec02843da0!2sMusaffah%20-%20M17%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1771165299089!5m2!1sen!2s" />
    </div>
  );
};

export default Contact;
