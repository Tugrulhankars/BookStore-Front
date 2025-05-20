import React from 'react'
import ShoppingCartDropDown from './ShoppingCartDropDown'
import {Link, Links} from 'react-router'
function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-200 focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden sm:flex sm:items-center sm:justify-between sm:ml-6 w-full">
                        <div className="flex space-x-8">
                            <Link className="text-gray-900 font-semibold text-lg" to="/">BookStore</Link>
                            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Category</a>
                            <Link to="offer" className="text-gray-600 hover:text-gray-900 font-medium">Kampanyalar</Link>
                            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
                        </div>

                        <div className="flex items-center space-x-6">
                            {/* <a href="" className='text-gray-600 hover:text-gray-900'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </a>*/ }
                           
                            <ShoppingCartDropDown/>
                           
                            <Link to="login" className="text-gray-600 hover:text-gray-900 font-medium">Sign In</Link>
                            <Link to="register" className= "bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 font-medium">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar