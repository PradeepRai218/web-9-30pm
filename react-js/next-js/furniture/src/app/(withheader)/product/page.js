"use client"
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import axios from "axios";
import Link from "next/link";

export default function Product() {
  
    let [productData,setProductData]=useState([])

  let getProducts=()=>{
    axios.get(`https://dummyjson.com/products`)
    .then((res)=>res.data)
    .then((finalRes)=>{
        setProductData(finalRes.products);
        
    })
  } 
  
  useEffect(()=>{
    getProducts()
  },[])  

  return (
    <div>
      <Breadcrumb title="Product" />
      <div className="max-w-[1320px] mx-auto gap-5 my-10 grid grid-cols-4">
        {
            productData.map((obj,index)=>  <ProductItems data={obj} key={index} /> )
        }
       
       
      </div>
    </div>
  );
}

function ProductItems({data}) {
    let {id,title,thumbnail,description}=data
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
      <a href="#">
        <img
          className="rounded-base"
          src={thumbnail}
          alt=""
        />
      </a>
      <a href="#">
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
          {title}
        </h5>
      </a>
      <p className="mb-6 text-body">
            {description}
      </p>
      <Link
        href={`/product/${id}`}
        className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
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
      </Link>
    </div>
  );
}
