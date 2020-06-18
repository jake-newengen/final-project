import React, { useEffect, useState, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { isAuthenticated } from "utils/auth";

const PrimaryLayout = () => {
  const navigate = useNavigate();
  const [authenticating, setAuthenticating] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if(!isAuthenticated()) {
      navigate("/auth/login");
    } else {
      setAuthenticating(false);
    }
  }, [])

  function toggleMobileMenu() {
    setMenuOpen(!menuOpen);
  }

  if (authenticating) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-200">
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
              </div>
            </div>
            <div className="-mr-2 items-center hidden sm:flex">
              <span className="inline-flex rounded-md shadow-sm ml-2">
                <NavLink as="button"  to="/auth/logout"  type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                  Logout
                </NavLink>
              </span>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button onClick={toggleMobileMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                {menuOpen ? (
                  <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3">
              <NavLink to="/urls" activeClassName="border-l-4 bg-indigo-50" className="block pl-3 pr-4 py-2 border-indigo-500 text-base font-medium text-indigo-700 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">Urls</NavLink>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <Link to="/logout" className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Sign out</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="py-10">
        <Outlet />
      </div>
    </div>
  );
}

export { PrimaryLayout };