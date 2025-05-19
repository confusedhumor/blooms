import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductCategory } from '../types';
import { mockProducts } from '../data/mockData';

interface ProductsContextType {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
  featuredProducts: Product[];
  newArrivals: Product[];
  getProductsByCategory: (category: ProductCategory) => Product[];
  getProductById: (id: string) => Product | undefined;
  getRelatedProducts: (product: Product, limit?: number) => Product[];
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // In a real app, this would fetch from an API
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        // Simulating API call with setTimeout
        setTimeout(() => {
          setProducts(mockProducts);
          setIsLoading(false);
        }, 800);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch products'));
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const featuredProducts = products.filter((product) => product.featured);
  
  const newArrivals = products.filter((product) => product.newArrival);

  const getProductsByCategory = (category: ProductCategory): Product[] => {
    return products.filter((product) => product.category === category);
  };

  const getProductById = (id: string): Product | undefined => {
    return products.find((product) => product.id === id);
  };

  const getRelatedProducts = (product: Product, limit = 4): Product[] => {
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, limit);
  };

  const value = {
    products,
    isLoading,
    error,
    featuredProducts,
    newArrivals,
    getProductsByCategory,
    getProductById,
    getRelatedProducts,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};