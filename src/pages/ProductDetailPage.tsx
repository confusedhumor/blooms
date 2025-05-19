import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart, Truck, Calendar, Info, Minus, Plus } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { ProductVariant, Product } from '../types';
import ProductGrid from '../components/product/ProductGrid';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { getProductById, isLoading, getRelatedProducts } = useProducts();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!isLoading && productId) {
      const foundProduct = getProductById(productId);
      setProduct(foundProduct);
      if (foundProduct) {
        setSelectedImage(foundProduct.imageUrl);
        setRelatedProducts(getRelatedProducts(foundProduct));
        setSelectedVariant(undefined);
        setQuantity(1);
      }
    }
  }, [productId, getProductById, isLoading, getRelatedProducts]);

  const handleQuantityChange = (value: number) => {
    const newQuantity = Math.max(1, Math.min(10, value));
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedVariant);
    }
  };

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
  };

  if (isLoading) {
    return (
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image section skeleton */}
            <div>
              <div className="bg-gray-200 rounded-lg h-96 w-full mb-4"></div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-200 rounded-lg h-24"></div>
                ))}
              </div>
            </div>
            
            {/* Content section skeleton */}
            <div>
              <div className="bg-gray-200 h-8 w-3/4 rounded mb-4"></div>
              <div className="bg-gray-200 h-6 w-1/4 rounded mb-6"></div>
              <div className="bg-gray-200 h-4 w-full rounded mb-2"></div>
              <div className="bg-gray-200 h-4 w-full rounded mb-2"></div>
              <div className="bg-gray-200 h-4 w-3/4 rounded mb-6"></div>
              <div className="bg-gray-200 h-10 w-full rounded mb-4"></div>
              <div className="bg-gray-200 h-12 w-full rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/"
            className="bg-primary-500 text-white font-medium py-2 px-6 rounded-md hover:bg-primary-600 transition-colors inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const finalPrice = selectedVariant 
    ? product.price + selectedVariant.priceAdjustment 
    : product.price;

  const gallery = product.gallery || [product.imageUrl];

  return (
    <div className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft size={18} className="mr-1" /> Back to shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Product Images */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden mb-4 h-96 flex items-center justify-center"
              >
                <img 
                  src={selectedImage} 
                  alt={product.name}
                  className="object-contain h-full w-full"
                />
              </motion.div>
            </AnimatePresence>

            <div className="grid grid-cols-4 gap-2">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`rounded-lg overflow-hidden h-24 border-2 ${
                    selectedImage === image ? 'border-primary-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - view ${index + 1}`}
                    className="object-cover h-full w-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="font-serif text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary-600 mb-6">
              ₹{finalPrice.toFixed(2)}
            </p>
            
            <p className="text-gray-700 mb-6">{product.description}</p>

            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-3">Options:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => handleVariantSelect(variant)}
                      disabled={!variant.inStock}
                      className={`px-4 py-2 rounded-md border transition-colors ${
                        selectedVariant?.id === variant.id
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : variant.inStock
                          ? 'border-gray-300 hover:border-primary-300'
                          : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {variant.name}
                      {variant.priceAdjustment > 0 && ` (+₹${variant.priceAdjustment.toFixed(2)})`}
                      {variant.priceAdjustment < 0 && ` (-₹${Math.abs(variant.priceAdjustment).toFixed(2)})`}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  product.inStock ? 'bg-success-100 text-success-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              <div className="flex items-stretch">
                <div className="flex border border-gray-300 rounded-l-md">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="px-3 flex items-center justify-center border-r border-gray-300 hover:bg-gray-50 transition-colors disabled:text-gray-400"
                  >
                    <Minus size={18} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10) || 1)}
                    className="w-12 text-center border-0 focus:ring-0"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 10}
                    className="px-3 flex items-center justify-center border-l border-gray-300 hover:bg-gray-50 transition-colors disabled:text-gray-400"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center rounded-r-md font-medium transition-colors ${
                    product.inStock
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </button>

                <button
                  className="ml-2 p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} />
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Truck className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Delivery</h4>
                    <p className="text-sm text-gray-600">Same-day delivery available for orders placed before 2 PM local time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Freshness Guaranteed</h4>
                    <p className="text-sm text-gray-600">Our flowers are guaranteed fresh for up to 7 days from delivery.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Info className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Care Instructions</h4>
                    <p className="text-sm text-gray-600">Care instructions are included with every delivery to help your flowers last longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-serif text-2xl font-bold mb-6">You May Also Like</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;