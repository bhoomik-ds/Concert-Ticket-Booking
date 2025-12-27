import React, { useState } from 'react';
import { Menu, X, Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-pink-600"><Link to="/">BookMYConcert</Link></div>
            
            {/* Desktop Search */}
            <div className="hidden md:flex items-center bg-gray-50 rounded-md px-4 border border-gray-300 py-2 w-96">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search ticket types (Fan Pit, Platinum, General)"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/TicketBooking" className="text-sm text-gray-700 hover:text-gray-900">
              Fan Pit Standing
            </Link>
            <Link to="/TicketBooking" className="text-sm text-gray-700 hover:text-gray-900">
              Platinum Seating
            </Link>
            <Link to="/TicketBooking" className="text-sm text-gray-700 hover:text-gray-900">
              General Standing
            </Link>
            <button className="flex items-center text-sm text-gray-700 hover:text-gray-900">
              <MapPin className="w-4 h-4 mr-1" />
              Junagadh
            </button>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md text-sm hover:bg-pink-700 transition">
              Sign In
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="w-6 h-6 text-gray-700" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="md:hidden pb-3">
            <div className="flex items-center bg-gray-50 rounded-md px-4 py-2">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            <Link to="/TicketBooking" className="text-sm text-gray-700 hover:text-gray-900">
              Fan Pit Standing
            </Link>
            <Link to="/TicketBooking" className="text-sm text-gray-700 hover:text-gray-900">
              Platinum Seating
            </Link>
            <Link to="/TicketBooking" className="text-sm text-gray-700 hover:text-gray-900">
              General Standing
            </Link>
            <button className="flex items-center text-sm text-gray-700">
              <MapPin className="w-4 h-4 mr-1" />
              Junagadh
            </button>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md text-sm">
              Sign In
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
