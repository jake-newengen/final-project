import React from "react";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { isAuthenticated } from "utils/auth";

const PrimaryLayout = () => {

  return (
    <div className="min-h-screen bg-white">
      {isAuthenticated() && (
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <svg className="text-pink-500" width="25" height="25" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.7 49C11.7 42.7 16.8 37.6 23.1 37.6H45.5V29.3H23.1C12.2 29.3 3.39999 38.1 3.39999 49C3.39999 59.9 12.2 68.7 23.1 68.7H45.5V60.4H23.1C16.8 60.4 11.7 55.3 11.7 49ZM76.9 29.3H54.5V37.6H76.9C83.2 37.6 88.3 42.7 88.3 49C88.3 55.3 83.2 60.4 76.9 60.4H54.5V68.7H76.9C87.8 68.7 96.6 59.9 96.6 49C96.6 38.1 87.8 29.3 76.9 29.3ZM26.3 49C26.3 51.3 28.2 53.2 30.5 53.2H69.6C71.9 53.2 73.8 51.3 73.8 49C73.8 46.7 71.9 44.8 69.6 44.8H30.5C28.2 44.8 26.3 46.7 26.3 49Z" fill="currentColor"/>
                    </svg>
                  </Link>
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex">
                  <NavLink activeClassName="border-indigo-500 text-gray-900" to="/urls" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none hover:border-gray-300 focus:border-indigo-700 transition duration-150 ease-in-out">
                    URLs
                  </NavLink>
                  <NavLink activeClassName="border-indigo-500 text-gray-900" to="/stats" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                    Stats
                  </NavLink>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* <!-- Mobile menu button --> */}
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                  {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                  <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                  <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu, toggle classes based on menu state.

          Open: "block", closed: "hidden" */}
          <div className="hidden sm:hidden">
            <div className="pt-2 pb-3">
              <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">Dashboard
              </a>
              <a href="#" className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Team
              </a>
              <a href="#" className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Projects
              </a>
              <a href="#" className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Calendar
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-6 text-gray-800">Tom Cook
                  </div>
                  <div className="text-sm font-medium leading-5 text-gray-500">tom@example.com
                  </div>
                </div>
              </div>
              <div className="mt-3" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Your Profile
                </a>
                <a href="#" className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Settings
                </a>
                <a href="#" className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}

      <div className="py-10">
        <Outlet />
      </div>
    </div>
  );
}

export { PrimaryLayout };