import React from "react";

const ContactMap = ({ mapUrl }) => {
  return (
    <section className="w-full h-[600px]">
      <iframe
        src={mapUrl}
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default ContactMap;
