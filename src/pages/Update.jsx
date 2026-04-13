import React from 'react';
import Hero2 from '../components/Hero2';
import Footer from '../components/Footer';
import updates from '../data/Updates';
import UpdateCard from '../components/UpdateCard';
import SearchSidebar from '../components/SearchSidebar';

const Update = () => {
  return (
    <div>
      <Hero2
        title="Blog"
        backgroundImage="https://khyberlinetransportservices.com/wp-content/uploads/2023/07/services-4.jpg"
      />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-10">
          <div className="w-2/3">
            {updates.map((update) => (
              <UpdateCard key={update.id} update={update} />
            ))}
          </div>

          <SearchSidebar />
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Update;
