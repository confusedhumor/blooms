import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import ProductCard from '../product/ProductCard';

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 mr-4 hover:bg-gray-100 transition-colors"
      aria-label="Next slide"
    >
      <ChevronRight size={24} className="text-gray-600" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 ml-4 hover:bg-gray-100 transition-colors"
      aria-label="Previous slide"
    >
      <ChevronLeft size={24} className="text-gray-600" />
    </button>
  );
};

const FeaturedProducts: React.FC = () => {
  const { featuredProducts, isLoading } = useProducts();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  if (isLoading) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Featured Products</h2>
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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold mb-4">Featured Products</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
        </div>

        {featuredProducts.length > 0 ? (
          <div className="featured-products-slider">
            <Slider {...settings}>
              {featuredProducts.map((product) => (
                <div key={product.id} className="px-2">
                  <ProductCard product={product} />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <p className="text-center text-gray-600">No featured products available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;