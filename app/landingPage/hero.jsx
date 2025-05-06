import React from 'react';
import { FaMapMarkerAlt, FaHome, FaDollarSign } from 'react-icons/fa';

const Hero = () => {
    return (
        <div
            className="min-h-screen pt-32 flex flex-col justify-between bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >      <div className="max-w-6xl mx-auto px-4 pt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl font-bold leading-tight text-gray-900">
                        Find A House<br />That Suits You
                    </h1>
                    <p className="text-gray-900 bg-white px-2 mt-4">
                        Want to find a home? We are ready to help you find one that suits your lifestyle and needs.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded mt-6 w-fit">
                        Get Started
                    </button>

                    <div className="flex mt-10 space-x-10">
                        <div>
                            <p className="text-2xl text-gray-100 font-semibold">1200<span className="text-gray-100">+</span></p>
                            <p className="text-gray-100 text-sm">Listed Properties</p>
                        </div>
                        <div>
                            <p className="text-2xl text-gray-100 font-semibold">4500<span className="text-gray-100">+</span></p>
                            <p className="text-gray-100 text-sm">Happy Customers</p>
                        </div>
                        <div>
                            <p className="text-2xl text-gray-100 font-semibold">100<span className="text-gray-100">+</span></p>
                            <p className="text-gray-100 text-sm">Awards</p>
                        </div>
                    </div>
                </div>

                {/* <div className="w-full h-full">
          <img
            src="https://framerusercontent.com/images/IRtceiCnSbSzdYAkWUXEPlwKvg.jpg?scale-down-to=4096"
            alt="Building"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div> */}
            </div>


            <div className="w-full absolute -bottom-16 mt-10 px-4">
                <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div>
                        <label className="text-sm font-semibold mb-1 block">Location</label>
                        <div className="flex items-center border rounded px-3 py-2">
                            <FaMapMarkerAlt className="mr-2 text-gray-500" />
                            <input type="text" placeholder="Enter location" className="w-full outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-semibold mb-1 block">Property Type</label>
                        <div className="flex items-center border rounded px-3 py-2">
                            <FaHome className="mr-2 text-gray-500" />
                            <input type="text" placeholder="e.g. Apartment" className="w-full outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-semibold mb-1 block">Budget</label>
                        <div className="flex items-center border rounded px-3 py-2">
                            <FaDollarSign className="mr-2 text-gray-500" />
                            <input type="text" placeholder="$1000 - $5000" className="w-full outline-none" />
                        </div>
                    </div>
                    <div>
                        <button className="bg-black text-white w-full py-3 rounded hover:bg-gray-800 transition">
                            Search Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
