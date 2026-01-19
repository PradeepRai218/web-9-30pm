"use client"
import { redirect } from 'next/navigation';
import React from 'react'

export default function Login() {

  let handleLogin=(e)=>{

    e.preventDefault();
    alert('Login Successful');
    redirect('/')
    
  }
  return (
    <div className='w-[350px] mx-auto bg-red-500'>
      
        <div className=" flex items-center justify-center ">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>
                
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
                    </div>
                    
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200">Login</button>
                </form>
                
                <p className="text-center text-sm text-gray-600 mt-4">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
            </div>
        </div>

    </div>
  )
}
