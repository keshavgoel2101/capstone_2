// src/components/InteriorDesignSection.jsx
import React from 'react';

const InteriorDesignSection = () => {
  return (
    <div className="bg-white py-16 px-8 mt-20 md:px-20">
 
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image Stack */}
        <div className="relative w-full lg:w-1/2">
          <img
            src="https://framerusercontent.com/images/IRtceiCnSbSzdYAkWUXEPlwKvg.jpg?scale-down-to=4096"
            alt="Kitchen Interior"
            className="w-full rounded-lg shadow-lg relative z-10"
          />
          <div className="absolute top-6 left-6 w-full h-full bg-gray-200 rounded-lg -z-0"></div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-sm font-semibold text-yellow-600 uppercase">About Us</p>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            Creative solutions by professional designers
          </h2>
          <p className="text-gray-600">
            Your kitchen is an expression of who you are, and its design should match your lifestyle.
            Whether you have traditional tastes or desire a modern feel, we can design your dream kitchen
            to suit any purpose.
          </p>
          <button className="mt-4 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition">
            Continue Reading →
          </button>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: 'Reasonable Prices',
            desc: 'We produce furniture to fulfill needs of all people and offer it at affordable and fair prices.',
            icon: '💰',
          },
          {
            title: 'Exclusive Design',
            desc: 'Mixture of imagination, experience and professionalism is the secret of our design!',
            icon: '🎨',
          },
          {
            title: 'Professional Team',
            desc: 'We are proud of our amicable, professional and always developing team!',
            icon: '🧑‍💼',
          },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-start space-y-4">
            <div className="text-4xl">{item.icon}</div>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteriorDesignSection;
