
 
import { MapPin, ArrowRight } from 'lucide-react';

const PopularHomes = () => {
 
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      location: "Banana Island, Lagos",
      beds: 4,
      area: "10×10 m",
      distance: "1600 m",
      price: "₦100,000,000"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Parkview Estate, Lagos",
      beds: 5,
      area: "10×10 m",
      distance: "1600 m",
      price: "₦200,000,000"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1647579350437-ed3307900d0d?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Eko Atlantic, Lagos",
      beds: 3,
      area: "10×10 m",
      distance: "1600 m",
      price: "₦500,000,000"
    }
  ];

  return (
    <div className="max-w-6xl min-h-screen  mx-auto px-4 py-12">
 
      <div className="flex items-center mb-2">
        <div className="w-6 h-0.5 bg-gray-600 mr-3"></div>
        <span className="text-gray-600 font-medium uppercase text-sm tracking-wider">POPULAR</span>
      </div>
      
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Our Popular Homes</h2>
        <a href="/properties" className="flex items-center text-gray-600 hover:text-gray-800">
          Explore All 
          <ArrowRight className="ml-2" size={18} />
        </a>
      </div>

 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
 
            <div className="bg-blue-50 h-64 overflow-hidden">
              <img 
                src={property.image} 
                alt={property.location} 
                className="w-full h-full object-cover"
              />
            </div>
            
        
            <div className="p-5">
 
              <div className="flex items-center mb-4">
                <MapPin size={18} className="text-gray-800 mr-2" />
                <span className="font-medium text-gray-800">{property.location}</span>
              </div>
              
 
              <div className="flex items-center justify-between mb-4 text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 7V4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>{property.beds} Bed</span>
                </div>
                
                <div className="flex items-center mx-2">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M4 9H20" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 20L9 9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>{property.area}</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>{property.distance}</span>
                </div>
              </div>
              
    
              <div className="flex items-center justify-between mt-6">
                <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors">
                  Book Now
                </button>
                <span className="font-bold text-gray-900">{property.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularHomes;