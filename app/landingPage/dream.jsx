import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
 
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=3267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Modern luxury home exterior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
 
        <div className="w-full md:w-1/3 text-center px-4 flex flex-col items-center">
 
          <div className="mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 10L12 22L20 10L12 2Z" />
            </svg>
          </div>
          
    
          <h2 className="text-3xl md:text-4xl font-normal text-gray-800 mb-4">
            If you can <span className="italic">dream it</span>, we can <span className="italic">build it</span>.
          </h2>
          
   
          <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            We adopt a uniquely personalized perspective to each project to 
            deliver stunning spaces of optimal function. Renowned for our 
            architectural understanding and masterful craftsmanship, our 
            portfolio of residential projects.
          </p>
          
 
          <button className="bg-black text-white px-8 py-3 rounded-sm hover:bg-gray-800 transition-colors">
            Get in touch
          </button>
        </div>
        
    
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <div className="rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1610569244414-5e7453a447a8?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Modern luxury home at night" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;