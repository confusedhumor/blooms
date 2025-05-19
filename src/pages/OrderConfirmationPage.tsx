import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import { useOrder } from '../context/OrderContext';

const OrderConfirmationPage: React.FC = () => {
  const { currentOrder } = useOrder();
  const navigate = useNavigate();

  useEffect(() => {
    // If no current order, redirect to home
    if (!currentOrder) {
      navigate('/');
    }
  }, [currentOrder, navigate]);

  if (!currentOrder) {
    return null;
  }

  const { orderNumber, customer, items, total, createdAt } = currentOrder;
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // WhatsApp message
  const message = encodeURIComponent(
    `Hi KrsnaBlooms! I've just placed order #${orderNumber} and would like to confirm my purchase.\n\n` +
    `Order details:\n` +
    `- Name: ${customer.name}\n` +
    `- Order #: ${orderNumber}\n` +
    `- Date: ${formattedDate}\n` +
    `- Total: ₹${total.toFixed(2)}\n\n` +
    `Looking forward to receiving my order!`
  );

  const whatsappUrl = `https://wa.me/8377885383?text=${message}`;

  return (
    <div className="pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 text-primary-500 rounded-full"
            >
              <CheckCircle size={40} />
            </motion.div>
            <h1 className="font-serif text-3xl font-bold mb-2">Thank You for Your Order!</h1>
            <p className="text-gray-600">
              Your order has been received and is being processed.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="font-medium text-lg mb-4">Order Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Order Number:</p>
                <p className="font-medium">{orderNumber}</p>
              </div>
              <div>
                <p className="text-gray-600">Date:</p>
                <p className="font-medium">{formattedDate}</p>
              </div>
              <div>
                <p className="text-gray-600">Name:</p>
                <p className="font-medium">{customer.name}</p>
              </div>
              <div>
                <p className="text-gray-600">Email:</p>
                <p className="font-medium">{customer.email}</p>
              </div>
              <div>
                <p className="text-gray-600">Phone:</p>
                <p className="font-medium">{customer.phone}</p>
              </div>
              <div>
                <p className="text-gray-600">Total:</p>
                <p className="font-medium">₹{total.toFixed(2)}</p>
              </div>
              {customer.address && (
                <div className="col-span-2">
                  <p className="text-gray-600">Delivery Address:</p>
                  <p className="font-medium">{customer.address}</p>
                </div>
              )}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-medium text-lg mb-4">Order Summary</h2>
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
                    <h4 className="font-medium">{item.name}</h4>
                    {item.selectedVariant && (
                      <p className="text-gray-600 text-sm">{item.selectedVariant.name}</p>
                    )}
                    <div className="flex justify-between mt-1">
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white font-medium py-3 px-6 rounded-md hover:bg-[#128C7E] transition-colors flex items-center justify-center"
              >
                <span className="mr-2">Confirm via WhatsApp</span> <ArrowRight size={18} />
              </a>
              <Link
                to="/"
                className="w-full sm:w-auto bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <Home size={18} className="mr-2" /> Return to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;