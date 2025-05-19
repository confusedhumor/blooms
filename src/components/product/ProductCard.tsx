import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <motion.div 
      className="group relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden h-64">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          {product.newArrival && (
            <span className="absolute top-2 left-2 bg-secondary-300 text-gray-800 text-xs font-medium px-2 py-1 rounded">
              New Arrival
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Out of Stock</span>
            </div>
          )}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-serif font-medium text-lg mb-1 text-gray-800">{product.name}</h3>
          <p className="text-primary-600 font-semibold mb-3">₹{product.price.toFixed(2)}</p>
          <div className="flex justify-between items-center">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex items-center text-sm font-medium px-3 py-2 rounded transition-colors ${
                product.inStock
                  ? 'bg-primary-500 text-white hover:bg-primary-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ShoppingBag size={16} className="mr-1" />
              Add to Cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="text-sm text-gray-600 hover:text-primary-500 font-medium"
            >
              View Details
            </Link>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;