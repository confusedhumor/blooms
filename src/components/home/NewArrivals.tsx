import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProducts } from '../../context/ProductContext';
import ProductCard from '../product/ProductCard';

const NewArrivals: React.FC = () => {
  const { newArrivals, isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">New Arrivals</h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-6 rounded mb-2 w-3/4"></div>
                <div className="bg-gray-200 h-4 rounded w-1/4 mb-4"></div>
                <div className="flex justify-between">
                  <div className="bg-gray-200 h-10 rounded w-28"></div>
                  <div className="bg-gray-200 h-6 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold mb-4">New Arrivals</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
        </div>

        {newArrivals.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.slice(0, 4).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {newArrivals.length > 4 && (
              <div className="text-center mt-12">
                <Link
                  to="/category/new-arrivals"
                  className="inline-block bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors font-medium px-6 py-3 rounded-md"
                >
                  View All New Arrivals
                </Link>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-600">No new arrivals available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;