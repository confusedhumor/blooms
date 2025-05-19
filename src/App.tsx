import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/layout/Layout';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductContext';
import { OrderProvider } from './context/OrderContext';

// Lazy-loaded components
const HomePage = lazy(() => import('./pages/HomePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const OrderConfirmationPage = lazy(() => import('./pages/OrderConfirmationPage'));

// Fallback for suspense
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
  </div>
);

// Error fallback
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen flex items-center justify-center bg-red-50">
    <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
      <p className="text-gray-700 mb-4">{error.message}</p>
      <button
        onClick={() => window.location.reload()}
        className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ProductsProvider>
        <CartProvider>
          <OrderProvider>
            <Router>
              <Layout>
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/category/:categoryId" element={<CategoryPage />} />
                    <Route path="/product/:productId" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/confirmation" element={<OrderConfirmationPage />} />
                  </Routes>
                </Suspense>
              </Layout>
            </Router>
          </OrderProvider>
        </CartProvider>
      </ProductsProvider>
    </ErrorBoundary>
  );
}

export default App;