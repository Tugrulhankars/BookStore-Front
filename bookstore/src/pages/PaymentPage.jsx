import React from 'react'
import { Link } from 'react-router'
function PaymentPage() {
  return (
    <div className="min-h-screen bg-white py-10 px-6 lg:px-8 flex justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sol Kısım: Ödeme Formu */}
        <div>
          <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" className="h-8 mb-8" />

          <button className="w-full bg-black text-white py-3 rounded-md mb-6"> Pay</button>
          <div className="text-center text-sm text-gray-500 mb-6">or</div>

          <form className="space-y-4">
            <input type="email" placeholder="Email address" className="w-full border px-4 py-2 rounded-md" />
            <input type="text" placeholder="Name on card" className="w-full border px-4 py-2 rounded-md" />
            <input type="text" placeholder="Card number" className="w-full border px-4 py-2 rounded-md" />
            <div className="flex gap-4">
              <input type="text" placeholder="MM/YY" className="w-1/2 border px-4 py-2 rounded-md" />
              <input type="text" placeholder="CVC" className="w-1/2 border px-4 py-2 rounded-md" />
            </div>
            <input type="text" placeholder="Address" className="w-full border px-4 py-2 rounded-md" />
            <div className="flex gap-4">
              <input type="text" placeholder="City" className="w-1/3 border px-4 py-2 rounded-md" />
              <input type="text" placeholder="State / Province" className="w-1/3 border px-4 py-2 rounded-md" />
              <input type="text" placeholder="Postal code" className="w-1/3 border px-4 py-2 rounded-md" />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm text-gray-600">Billing address is the same as shipping address</span>
            </div>

            <div className='flex'>
              <Link to="order" className="w-full bg-indigo-600 text-white text-center py-3 rounded-md hover:bg-indigo-500 transition">
                Pay $341.68
              </Link>
            </div>

           
          </form>

          {/* 🔙 İptal Butonu */}
          <div className="mt-4">
            <Link to="/shoppingcart" className="text-sm text-gray-500 underline hover:text-gray-700">
              İptal Et ve Sepete Dön
            </Link>
          </div>
        </div>

        {/* Sağ Kısım: Sipariş Özeti */}
        <div className="bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$210.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-600">- $24.00</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>$23.68</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$22.00</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$341.68</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage