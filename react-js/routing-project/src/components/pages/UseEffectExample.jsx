import React, { useEffect, useState } from 'react'

export default function UseEffectExample() {
 let [count,setCount]=useState(0)
 let [count2,setCount2]=useState(0)
  let getProducts=()=>{
     console.log("Product Found");
     
  } 
  
  let getCategory=()=>{
     console.log("Category Found");
     
  }



//  useEffect(()=>{
//       getProducts()
//       getCategory()
//  },[]) //Single Time Call

//  useEffect(()=>{
//       getProducts()
//       getCategory()
//  })  //State ke Change 

  useEffect(()=>{
      getProducts()
      getCategory()
 },[count])  //State ke Change 



  return (
    <div>
        <button onClick={()=>setCount(count+1)} className=' text-white bg-red-500 p-3 m-2'>Change Count1 {count} </button>

         <button onClick={()=>setCount2(count2+1)} className='text-white bg-red-500 p-3 m-2'>Change Count2 {count2} </button>
    </div>
  )
}
