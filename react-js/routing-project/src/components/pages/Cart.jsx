import React from 'react'
import Header from '../common/Header'

export default function Cart() {
return (
    <>
      
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        
        <h1 className="text-2xl font-bold mt-4">Your Cart</h1>
        <div className="w-full max-w-4xl mt-6 p-4 bg-white rounded-lg shadow-md">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 text-left">Item</th>
                        <th className="py-2 px-4 text-left">Quantity</th>
                        <th className="py-2 px-4 text-left">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Cart items will go here */}
                </tbody>
            </table>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Total Price: $0.00</h2>
            </div>
        </div>
    </div>
    </>
    
)
}
