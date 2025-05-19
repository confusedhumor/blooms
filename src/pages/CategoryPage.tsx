import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, SortDesc, SortAsc } from 'lucide-react';
import { ProductCategory } from '../types';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/product/ProductGrid';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'name-asc' | 'name-desc';

const categoryTitles: Record<ProductCategory, string> = {
  flowers: 'Fresh Flowers',
  plants: 'Indoor Plants',
  bouquets: 'Bouquets',
  gifts: 'Gift Boxes',
};

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { products, isLoading } = useProducts();
  
  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [categoryProducts, setCategoryProducts] = useState(products);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const validCategoryId = categoryId as ProductCategory;
  
  useEffect(() => {
    if (!isLoading && products.length > 0) {
      let filtered = products.filter((product) => product.category === validCategoryId);

      // Apply price filter
      filtered = filtered.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
      );

      // Apply in-stock filter
      if (inStockOnly) {
        filtered = filtered.filter((product) => product.inStock);
      }

      // Apply sorting
      const sorted = [...filtered].sort((a, b) => {
        switch (sortOption) {
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'name-asc':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          default:
            return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        }
      });

      setCategoryProducts(sorted);
    }
  }, [categoryId, products, isLoading, sortOption, priceRange, inStockOnly, validCategoryId]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (event.target.name === 'min') {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  return (
    <div className="pt-6 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {categoryTitles[validCategoryId] || 'Products'}
          </h1>
          <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between mb-8">
          <button
            onClick={toggleFilters}
            className="flex items-center font-medium text-gray-700 mb-4 md:mb-0 md:order-1"
          >
            <Filter size={20} className="mr-2" />
            Filters
          </button>

          <div className="flex items-center space-x-4 md:order-2">
            <label htmlFor="sort-by" className="text-gray-700 font-medium">
              Sort by:
            </label>
            <select
              id="sort-by"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white p-6 rounded-lg shadow-md mb-8"
          >
            <h3 className="font-medium text-lg mb-4">Filter Products</h3>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Price Range</h4>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="min-price" className="block text-sm text-gray-600">
                    Min Price
                  </label>
                  <input
                    type="number"
                    id="min-price"
                    name="min"
                    min="0"
                    max="1000"
                    value={priceRange[0]}
                    onChange={handlePriceChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="max-price" className="block text-sm text-gray-600">
                    Max Price
                  </label>
                  <input
                    type="number"
                    id="max-price"
                    name="max"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="in-stock-only"
                  checked={inStockOnly}
                  onChange={() => setInStockOnly(!inStockOnly)}
                  className="rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                />
                <label htmlFor="in-stock-only" className="ml-2 text-gray-700">
                  In Stock Only
                </label>
              </div>
            </div>
          </motion.div>
        )}

        <ProductGrid products={categoryProducts} loading={isLoading} />
      </div>
    </div>
  );
};

export default CategoryPage;