import React from "react";

export default function Login() {
  return (
    <div>
      <div className="container mx-auto p-8 flex">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl text-center mb-8 font-thin">
            <img src="/images/wscube-tech-logo-2.svg" className="mx-auto" alt="" />
          </h1>
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="p-8">
              <form
                method="POST"
                className=""
                action="#"
                onsubmit="return false;"
              >
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                  />
                </div>
                <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">
                  Login
                </button>
              </form>
            </div>
            <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
              <a href="#" className="font-medium text-indigo-500">
                Create account
              </a>
              <a href="#" className="text-gray-600">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
