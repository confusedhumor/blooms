import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50 text-primary-500">
           <h1 className="font-serif text-2xl md:text-3xl font-bold text-teal-500">KṛṣṇaBlooms</h1>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-medium hover:text-primary-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/category/flowers"
              className="font-medium hover:text-primary-500 transition-colors"
            >
              Flowers
            </Link>
            <Link
              to="/category/plants"
              className="font-medium hover:text-primary-500 transition-colors"
            >
              Plants
            </Link>
            <Link
              to="/category/bouquets"
              className="font-medium hover:text-primary-500 transition-colors"
            >
              Bouquets
            </Link>
            <Link
              to="/category/gifts"
              className="font-medium hover:text-primary-500 transition-colors"
            >
              Gifts
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              aria-label="Search"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search size={20} />
            </button>
            <Link
              to="/wishlist"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={20} />
            </Link>
            <Link
              to="/cart"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link
              to="/cart"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors z-50"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-40 pt-20"
        >
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-6 py-8">
              <Link
                to="/"
                className="text-lg font-medium hover:text-primary-500 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/category/flowers"
                className="text-lg font-medium hover:text-primary-500 transition-colors"
              >
                Flowers
              </Link>
              <Link
                to="/category/plants"
                className="text-lg font-medium hover:text-primary-500 transition-colors"
              >
                Plants
              </Link>
              <Link
                to="/category/bouquets"
                className="text-lg font-medium hover:text-primary-500 transition-colors"
              >
                Bouquets
              </Link>
              <Link
                to="/category/gifts"
                className="text-lg font-medium hover:text-primary-500 transition-colors"
              >
                Gifts
              </Link>
              <div className="flex space-x-6 pt-6">
                <Link
                  to="/wishlist"
                  className="flex items-center space-x-2 text-lg font-medium"
                >
                  <Heart size={20} />
                  <span>Wishlist</span>
                </Link>
                <button className="flex items-center space-x-2 text-lg font-medium">
                  <Search size={20} />
                  <span>Search</span>
                </button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;