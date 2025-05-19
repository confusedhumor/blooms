import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">KrsnaBlooms</h3>
            <p className="text-gray-300 mb-4">
              Bringing nature's beauty to your doorstep with our handcrafted floral arrangements and
              indoor plants.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook /> 
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category/flowers" className="text-gray-300 hover:text-white transition-colors">
                  Flowers
                </Link>
              </li>
              <li>
                <Link to="/category/plants" className="text-gray-300 hover:text-white transition-colors">
                  Plants
                </Link>
              </li>
              <li>
                <Link to="/category/bouquets" className="text-gray-300 hover:text-white transition-colors">
                  Bouquets
                </Link>
              </li>
              <li>
                <Link to="/category/gifts" className="text-gray-300 hover:text-white transition-colors">
                  Gifts
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold text-lg mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-white transition-colors">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <address className="not-italic space-y-3 text-gray-300">
              <p className="flex items-start">
                <MapPin className="mr-2 flex-shrink-0 mt-1" size={18} />
                <span>123 Flower Street, Garden City, Earth</span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@krsnablooms.com"
                  className="hover:text-white transition-colors"
                >
                  support@krsnablooms.in
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} KrsnaBlooms. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="MasterCard" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="PayPal" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;