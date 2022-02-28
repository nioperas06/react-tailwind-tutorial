import React from "react";
import {  Link } from "react-router-dom";




function Header() {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    < div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="#" className="text-2xl font-extrabold text-gray-900">Shop</a>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link to="/" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" target="_blank"> Home </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link to="/about"  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> About </Link>
                        </div>

                    </div>

                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="sr-only">View notifications</span>
                        </button>

                        <div className="ml-3 relative">
                            <div>
                                <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </nav>



    )
}

export default Header;
