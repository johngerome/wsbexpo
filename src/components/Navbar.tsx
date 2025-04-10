import React from 'react';
import { Menu, X, Music } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuItems = ['Event', 'Information', 'Sponsors', 'Marketplace', 'About'];

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <div className="flex-shrink-0 flex items-center space-x-4">
            <Music size={48} className="text-purple-500" />
            <h1 className="text-5xl font-bold tracking-tight text-white">wsbexpo</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-16">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:text-purple-400 px-4 py-3 text-xl font-bold tracking-wide transition duration-300 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-3 pb-4 space-y-2 sm:px-6 bg-black/90 backdrop-blur-sm">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:text-purple-400 block px-6 py-4 text-2xl font-bold tracking-wide hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;