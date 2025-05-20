import React from 'react'
import { Link, Outlet } from 'react-router'
function ShoppingCartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="flex gap-10">
        {/* Ürün Listesi */}
        <div className="flex-1 space-y-6">
          {/* Ürün */}
          <div className="flex items-center gap-6 border-b pb-6">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt="Basic Tee"
              className="w-24 h-24 rounded-md object-cover"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-lg">Basic Tee</h2>
              <p className="text-gray-500 text-sm">Sienna &middot; Large</p>
              <p className="font-semibold mt-1">$32.00</p>
              <p className="flex items-center text-green-600 text-sm mt-2">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                In stock
              </p>
            </div>

            <select className="border rounded-md px-2 py-1" defaultValue={1}>
              {[1, 2, 3, 4, 5].map((qty) => (
                <option key={qty} value={qty}>{qty}</option>
              ))}
            </select>

            <button className="text-gray-400 hover:text-gray-700" aria-label="Remove item">
              &times;
            </button>
          </div>

          {/* Başka ürün */}
          <div className="flex items-center gap-6 border-b pb-6">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt="Basic Tee Black"
              className="w-24 h-24 rounded-md object-cover"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-lg">Basic Tee</h2>
              <p className="text-gray-500 text-sm">Black &middot; Large</p>
              <p className="font-semibold mt-1">$32.00</p>
              <p className="flex items-center text-gray-400 text-sm mt-2">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4-4h.01M12 6v6" />
                </svg>
                Ships in 3–4 weeks
              </p>
            </div>

            <select className="border rounded-md px-2 py-1" defaultValue={1}>
              {[1, 2, 3, 4, 5].map((qty) => (
                <option key={qty} value={qty}>{qty}</option>
              ))}
            </select>

            <button className="text-gray-400 hover:text-gray-700" aria-label="Remove item">
              &times;
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-96 bg-gray-50 p-6 rounded-md shadow-md">
          <h2 className="font-semibold text-xl mb-4">Order summary</h2>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="font-semibold">$99.00</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping estimate</p>
              <p className="font-semibold">$5.00</p>
            </div>
            <div className="flex justify-between">
              <p>Tax estimate</p>
              <p className="font-semibold">$8.32</p>
            </div>
          </div>
          <div className="flex justify-between border-t pt-4 font-bold text-lg mb-6">
            <p>Order total</p>
            <p>$112.32</p>
          </div>
          <div className="w-full flex justify-center">
            <Link
              to="/payment"
              className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out text-center"
            >
              Checkout
            </Link>
          </div>
          




        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage