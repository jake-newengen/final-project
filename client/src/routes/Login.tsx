import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm()

  async function handleAuth(data: any) {
    setError(null);
    setLoading(true);

    try {
      let res = await axios.post("/auth/login", data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const { access_token } = res.data;

      if(access_token) {
        window.localStorage.setItem("s-tk", access_token);
        navigate("/urls");
      }
    }
    catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center align-center">
          <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7 49C11.7 42.7 16.8 37.6 23.1 37.6H45.5V29.3H23.1C12.2 29.3 3.39999 38.1 3.39999 49C3.39999 59.9 12.2 68.7 23.1 68.7H45.5V60.4H23.1C16.8 60.4 11.7 55.3 11.7 49ZM76.9 29.3H54.5V37.6H76.9C83.2 37.6 88.3 42.7 88.3 49C88.3 55.3 83.2 60.4 76.9 60.4H54.5V68.7H76.9C87.8 68.7 96.6 59.9 96.6 49C96.6 38.1 87.8 29.3 76.9 29.3ZM26.3 49C26.3 51.3 28.2 53.2 30.5 53.2H69.6C71.9 53.2 73.8 51.3 73.8 49C73.8 46.7 71.9 44.8 69.6 44.8H30.5C28.2 44.8 26.3 46.7 26.3 49Z" fill="black"/>
          </svg>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(handleAuth)} method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">
                Username
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input ref={register({ required: true })} name="username" id="username" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                {errors.username && "Username is required"}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input ref={register({ required: true })} name="password" id="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                {errors.password && "Password is required"}
              </div>
            </div>

            {error && (
              <div className="mt-6">
                <p className="text-red-500">{error}</p>
              </div>
            )}

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  Sign in
                </button>
              </span>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 bg-white text-gray-500">
                  Or
                </span>
              </div>
            </div>

            <div className="mt-6">
              <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                <Link to="/auth/register" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">Register for an account</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };