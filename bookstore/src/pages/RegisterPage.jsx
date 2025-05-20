import React from 'react'
import {Link} from 'react-router-dom'
function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sol kısım - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Create your account</h2>
          <p className="text-sm text-gray-500 mb-6">
            Already a member?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Sign in
            </Link>

          </p>

          <form className="space-y-4">
            <div className='flex space-x-4'>
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password Confirm"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Sign up
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-2 text-sm text-gray-500">or continue with</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex gap-4">
            <button className="flex-1 border border-gray-300 rounded-lg py-2 hover:bg-gray-100">
              Google
            </button>
            
          </div>
        </div>
      </div>

      {/* Sağ kısım - Görsel */}
      <div className="hidden md:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D"
          alt="Register visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default RegisterPage