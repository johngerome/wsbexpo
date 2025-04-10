const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold">wsbexpo</h3>
            <p className="text-gray-400">
              Creating extraordinary music experiences
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#event" className="text-gray-400 hover:text-purple-400">Event Calendar</a></li>
              <li><a href="#information" className="text-gray-400 hover:text-purple-400">Services</a></li>
              <li><a href="#sponsors" className="text-gray-400 hover:text-purple-400">Partners</a></li>
              <li><a href="#marketplace" className="text-gray-400 hover:text-purple-400">Tickets</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-purple-400">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: maspresentsau@gmail.com</li>
              <li>Phone: +610420307753</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold">Newsletter</h4>
            <p className="mb-4 text-gray-400">Get updates on upcoming events</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full text-white bg-gray-800 rounded-l-md border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <button className="px-4 py-2 text-white bg-purple-600 rounded-r-md hover:bg-purple-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-12 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; 2025 WSB Expo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;