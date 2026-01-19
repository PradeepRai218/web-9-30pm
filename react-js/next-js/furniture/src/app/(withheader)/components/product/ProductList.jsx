"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function ProductList({ data }) {
  let [product, setProduct] = useState(data.products);
  //State

  return <div>
    <div className="max-w-[1320px] gap-5 mx-auto my-10 grid grid-cols-4">
      {
        product.map((obj,index)=> <ProductCard key={index} data={obj}/> )
      }
        
    </div>

  </div>;
}

function ProductCard({data}) {

     let {id,title,thumbnail,description}=data
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
      <Link href={`/product-server/${id}`}>
        <img
          className="rounded-base"
          src={thumbnail}
          alt=""
        />
      </Link>
      <a href="#">
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
          {title}
        </h5>
      </a>
      <p className="mb-6 text-body">
            {description}
      </p>
     
        Read more
        <svg
          className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
  
    </div>
  );
}
