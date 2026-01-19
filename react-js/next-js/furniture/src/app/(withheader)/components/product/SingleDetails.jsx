"use client"
import React, { useState } from 'react'

export default function SingleDetails({data}) {
    let [mainImg,setMainimg]=useState(data.thumbnail)
    return (
        <div>
            <div className="container mx-auto px-4 py-10">

                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-6">
                    <span className="hover:text-black cursor-pointer">Home</span> /
                    <span className="mx-1 hover:text-black cursor-pointer">Products</span> /
                    <span className="text-black font-medium">{data.title}</span>
                </div>

                {/* Main Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Product Images */}
                    <div>
                        <img
                            src={mainImg}
                            alt="Product"
                            className="w-full rounded-xl border"
                        />

                        <div className="flex gap-4 mt-4">
                            {data.images.map((item) => (
                                <img
                                    key={item}
                                    src={item}
                                    onClick={()=>setMainimg(item)}
                                    alt="Thumbnail"
                                    className="w-20 h-20 rounded-lg border cursor-pointer hover:ring-2 ring-black"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <h1 className="text-3xl font-semibold mb-2">
                        {data.title}
                        </h1>

                        <p className="text-xl text-orange-600 font-bold mb-4">
                            ₹ {data.price}
                        </p>

                        <p className="text-gray-600 mb-6">
                        {data.description}
                        </p>

                        {/* Quantity */}
                        <div className="flex items-center gap-4 mb-6">
                            <input
                                type="number"
                                min="1"
                                defaultValue="1"
                                className="w-20 border rounded-lg px-3 py-2"
                            />

                            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                                Add to Cart
                            </button>
                        </div>

                        {/* Extra Info */}
                        <ul className="text-sm text-gray-500 space-y-2">
                            <li><span className="font-medium text-black">Category:</span> Furniture</li>
                            <li><span className="font-medium text-black">SKU:</span> CST-1023</li>
                        </ul>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mt-14">
                    <div className="flex gap-8 border-b mb-6">
                        <button className="pb-3 border-b-2 border-black font-medium">
                            Description
                        </button>
                        <button className="pb-3 text-gray-500 hover:text-black">
                            Additional Info
                        </button>
                        <button className="pb-3 text-gray-500 hover:text-black">
                            Reviews
                        </button>
                    </div>

                    <div className="text-gray-600 leading-relaxed">
                        <p>
                            This study table is crafted from premium quality wood with a smooth
                            finish. Designed to provide comfort and durability, making it ideal
                            for long working hours.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
