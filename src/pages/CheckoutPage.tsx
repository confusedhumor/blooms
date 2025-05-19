import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, CreditCard, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';
import { CustomerDetails } from '../types';

const checkoutSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  address: z.string().optional(),
  notes: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const CheckoutPage: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const { createOrder } = useOrder();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    if (items.length === 0) return;

    const customerDetails: CustomerDetails = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
    };

    const payload = {
      ...customerDetails,
      notes: data.notes || '',
      items,
      total,
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyIrcZa3IHLrvEFexWnVBmb7HnQ5t4ADk1zBC9ZrdMrLwFXB638-00x60Sly5fGp_DmTA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Google Sheets submission failed:', error);
    }

    createOrder(customerDetails, items, total);
    clearCart();
    navigate('/confirmation');
  };

  if (items.length === 0) {
    return (
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center bg-white rounded-lg shadow-md p-6">
            <h1 className="font-serif text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="mb-6">You need to add items to your cart before proceeding to checkout.</p>
            <Link
              to="/"
              className="bg-primary-500 text-white font-medium py-2 px-6 rounded-md hover:bg-primary-600 transition-colors inline-flex items-center"
            >
              <ArrowLeft size={18} className="mr-2" /> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-6">
          <Link to="/cart" className="inline-flex items-center text-gray-600 hover:text-primary-500 transition-colors">
            <ArrowLeft size={18} className="mr-1" /> Back to cart
          </Link>
        </div>

        <h1 className="font-serif text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-serif text-xl font-bold mb-6">Contact Information</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className={`w-full rounded-md border ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm p-3 focus:border-primary-500 focus:ring focus:ring-primary-200`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={14} className="mr-1" /> {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={`w-full rounded-md border ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        } shadow-sm p-3 focus:border-primary-500 focus:ring focus:ring-primary-200`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle size={14} className="mr-1" /> {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className={`w-full rounded-md border ${
                          errors.phone ? 'border-red-300' : 'border-gray-300'
                        } shadow-sm p-3 focus:border-primary-500 focus:ring focus:ring-primary-200`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle size={14} className="mr-1" /> {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Address (Optional)
                    </label>
                    <textarea
                      id="address"
                      {...register('address')}
                      rows={3}
                      className="w-full rounded-md border border-gray-300 shadow-sm p-3 focus:border-primary-500 focus:ring focus:ring-primary-200"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Order Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      {...register('notes')}
                      rows={3}
                      placeholder="Special instructions for delivery or care"
                      className="w-full rounded-md border border-gray-300 shadow-sm p-3 focus:border-primary-500 focus:ring focus:ring-primary-200"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-500 text-white font-medium py-3 rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center"
                  >
                    <CreditCard size={18} className="mr-2" />
                    {isSubmitting ? 'Processing...' : 'Complete Order'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 sticky top-24">
              <h2 className="font-serif text-xl font-bold mb-4">Order Summary</h2>

              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="py-3 flex">
                    <div className="flex-shrink-0 w-16 h-16 mr-4">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      {item.selectedVariant && (
                        <p className="text-gray-600 text-xs">{item.selectedVariant.name}</p>
                      )}
                      <div className="flex justify-between mt-1">
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        <p className="text-sm font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 mt-4 pt-4 space-y-3">
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

              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">
                  By completing your purchase, you agree to our{' '}
                  <Link to="/terms" className="text-primary-500 hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-primary-500 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
