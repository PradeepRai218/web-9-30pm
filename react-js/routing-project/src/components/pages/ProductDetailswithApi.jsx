import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function ProductDetailswithApi() {
    let {pid}=useParams() //Url Id
    let [data,setData]=useState(null)
    let [mainImg,setMainimg]=useState('')


    let getProductDetails=()=>{
        axios.get(`https://wscubetech.co/ecommerce-api/productdetails.php?id=${pid}`)
        .then((res)=>res.data)
        .then((finalRes)=>{
             setData(finalRes.product); //Object
             setMainimg(finalRes.product.image) //Main Image
            
        })
    }
    
    useEffect(()=>{
        if(pid){
            getProductDetails()
        }
    },[pid])
  return (
    <div>
        {
            data && 
            <>
                <h1 className='text-center font-bold text-4xl py-10'> {data.name} </h1>

                <div className='max-w-[1320px] gap-5 mx-auto grid grid-cols-2'>
                    <div className='shadow-lg'>
                        <img className='w-[100%]' src={mainImg} alt="" />

                        <div className='grid grid-cols-4 gap-10'>
                        {
                            data.multiple_images.map((v,i)=>{
                                return(
                                      <img onClick={()=>setMainimg(v)} src={v}  alt="" />
                                )
                            })
                        }
                        </div>
                      
                    </div>
                    <div>
                        <h3 className='text-2xl'>  {data.name} </h3>

                        <p>
                              {data.description}
                        </p>
                    </div>
                </div>
            </>
        }
        
    </div>
  )
}
