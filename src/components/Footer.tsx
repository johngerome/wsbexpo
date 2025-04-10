import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">wsbexpo</h3>
            <p className="text-gray-400">
              Creating extraordinary music experiences
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#event" className="text-gray-400 hover:text-purple-400">Event Calendar</a></li>
              <li><a href="#information" className="text-gray-400 hover:text-purple-400">Services</a></li>
              <li><a href="#sponsors" className="text-gray-400 hover:text-purple-400">Partners</a></li>
              <li><a href="#marketplace" className="text-gray-400 hover:text-purple-400">Tickets</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-purple-400">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: maspresentsau@gmail.com</li>
              <li>Phone: +610420307753</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Get updates on upcoming events</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full bg-gray-800 text-white border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 WSB Expo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;