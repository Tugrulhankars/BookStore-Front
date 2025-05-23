import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function ShoppingCartDropDown() {
 const [showCart, setShowCart] = useState(false);
 const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Basic Tee', price: 32, image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg' },
    { id: 2, name: 'Black Tee', price: 32, image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg' }
  ]);

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="flex justify-end items-center gap-4">
      <div
        className="relative group"
        onMouseEnter={() => setShowCart(true)}
        onMouseLeave={() => setShowCart(false)}
      >
        <div className="p-2">
          <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437
                M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218
                c1.121-2.3 2.1-4.684 2.924-7.138
                a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25
                L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0
                .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0
                .75.75 0 0 1 1.5 0Z" />
            </svg>
          </a>
        </div>

        {showCart && (
          <div className="absolute right-0 top-full w-64 bg-white border rounded-lg shadow-lg z-50 p-4">
            <h4 className="font-semibold mb-2">Sepet</h4>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-sm text-gray-500">Sepet boş</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">${item.price}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="mt-4">
              <Link to="shoppingcart" className='block text-center bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700'>
                 Sepete Git
              </Link>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCartDropDown