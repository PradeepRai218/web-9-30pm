import React from 'react'
import { useParams } from 'react-router'
import { productData } from '../../Data/ProductData' //6 Items

export default function ProductDetails() {

   let {pid}  =useParams() //Dynamic Value ->Object { pid:2 } //2

   let singleProduct=productData.find((obj)=>obj.id==pid) //Data Match->Obj
   
   console.log(singleProduct);
   
  return (
     <section className="py-10">
          <h1 className="text-center font-bold text-uppercase text-3xl">
            {singleProduct.title}
          </h1>

          <div className='max-w-[1320px] mx-auto grid grid-cols-2 gap-5 mt-5'>
                <div>
                    <img src={singleProduct.thumbnail} alt="" />
                </div>
                <div>
                    <h2 className='font-bold py-5'>
                         {singleProduct.title}
                    </h2>
                    <p>
                        {singleProduct.description}
                    </p>
                </div>
          </div>
         
     </section>
  )
}
