import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, total, removeFromCart, updateQuantity, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="font-serif text-3xl font-bold mb-6">Your Cart</h1>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
              <ShoppingBag size={32} className="text-gray-500" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/"
              className="bg-primary-500 text-white font-medium py-2 px-6 rounded-md hover:bg-primary-600 transition-colors inline-flex items-center"
            >
              Continue Shopping <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h1 className="font-serif text-3xl font-bold mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 md:p-6">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col md:flex-row items-start md:items-center py-4 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="w-full md:w-24 h-24 flex-shrink-0 mr-0 md:mr-4 mb-4 md:mb-0">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-grow">
                        <Link
                          to={`/product/${item.productId}`}
                          className="font-medium text-lg hover:text-primary-500 transition-colors"
                        >
                          {item.name}
                        </Link>
                        {item.selectedVariant && (
                          <p className="text-gray-600 text-sm">Option: {item.selectedVariant.name}</p>
                        )}
                        <div className="flex justify-between items-center mt-2">
                          <p className="font-medium">₹{item.price.toFixed(2)}</p>
                          <div className="flex items-center">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 rounded transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="mx-2 w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 rounded transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-4 flex items-center justify-between w-full md:w-auto">
                        <p className="font-semibold text-lg md:text-base md:mr-6">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors p-1"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="px-4 md:px-6 py-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-center">
                <button
                  onClick={clearCart}
                  className="text-red-500 font-medium hover:text-red-700 transition-colors mb-4 sm:mb-0"
                >
                  Clear Cart
                </button>
                <Link
                  to="/"
                  className="text-primary-500 font-medium hover:text-primary-700 transition-colors flex items-center"
                >
                  Continue Shopping <ArrowRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 sticky top-24">
              <h2 className="font-serif text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-primary-500 text-white font-medium py-3 rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center"
              >
                Proceed to Checkout <ArrowRight size={18} className="ml-2" />
              </Link>

              <div className="mt-6">
                <h3 className="font-medium mb-2">We Accept</h3>
                <div className="flex space-x-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-8" />
                  <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="MasterCard" className="h-8" />
                  <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="PayPal" className="h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;