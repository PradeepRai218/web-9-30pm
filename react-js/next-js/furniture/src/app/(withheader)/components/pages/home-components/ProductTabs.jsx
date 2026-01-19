"use client"
import ProductData from "@/app/(withheader)/Data/ProductData";
import React, { useState } from "react";

export default function ProductTabs() {
  let categoryData = [];
  ProductData.forEach((obj) => {
    if (!categoryData.includes(obj.category)) {
      categoryData.push(obj.category);
    }
  });
  
  
  let [currentCategory,setCurrentCategory]=useState(categoryData[0])

  console.log(currentCategory);

  let finalData=[...ProductData]
  
  finalData=finalData.filter((obj)=>obj.category==currentCategory)
  
 
  return (
    <section className="py-10">
      <div className="flex gap-5 justify-center">
        {categoryData.map((v, index) => (
          <button onClick={()=>setCurrentCategory(v)}
          
          
          className={` ${v==currentCategory ? 'bg-red-600' : 'bg-yellow-600'  }  p-[10px_20px] text-white`}
          
          
          
          
          
          > {v} </button>
        ))}
      </div>

      <div className="max-w-[1320px]  mx-auto mt-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {finalData.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg bg-white shadow-sm hover:shadow-lg transition group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                
                  <img
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition"
                  />
                
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>

                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                 
                    {product.name}
                 
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-400 line-through">
                    Rs. {product.oldPrice}
                  </span>
                  <span className="text-lg font-bold text-orange-500">
                    Rs. {product.price}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <button className="p-2 border rounded-full hover:bg-orange-50">
                    <img
                      src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/heart-regular.svg"
                      alt="wishlist"
                      width={18}
                      height={18}
                    />
                  </button>

                  <button
                   
                    className="px-4 py-2 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
