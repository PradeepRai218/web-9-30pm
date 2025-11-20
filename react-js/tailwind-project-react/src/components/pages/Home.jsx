import React from "react";
import Header from "../common/Header";
import { products } from "../../Data/productData";

export default function Home() {
  let cname = "WsCubeTech";
  let email = "pradeep.9997@gmail.com";
  let phone = 888888888;

  return (
    <>
      <Header companyName={cname} email={email} phone={phone} >

         <h3>Child Content</h3>
         
      </Header>
      {/* <Header> </Header > */}
      <section className="bg-amber-100 py-10">
        <h1 className="font-bold mb-5 uppercase text-center text-4xl">
          Our Product | Product Card With Out Components
        </h1>

        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          {products.map((obj, index) => {
            return (
              <div key={index} className="bg-neutral-primary-soft block max-w-sm p-2 border border-default rounded-base shadow-xs">
                <a href="#">
                  <img className="rounded-base" src={obj.thumbnail} alt="" />
                </a>
                <a href="#">
                  <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                    {obj.title}
                  </h5>
                </a>
                <p className="mb-6 text-body">{obj.description}</p>
                <a
                  href="#"
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
                </a>
              </div>
            );
          })}
        </div>

        <h1 className=" mt-10 font-bold mb-5 uppercase text-center text-4xl">
          Our Product | Product Card With Components
        </h1>
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
         {
          products.map((obj,index)=>{
            return(
              <ProductCard key={index} data={ obj } />
            )
          })
         }
          
          
        </div>
      </section>
    </>
  );
}

export function ProductCard({data}) {
  let {title,thumbnail,description}=data
  //{data} = {title:"Iphone"}
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-2 border border-default rounded-base shadow-xs">
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
      <a
        href="#"
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
      </a>
    </div>
  );
}
