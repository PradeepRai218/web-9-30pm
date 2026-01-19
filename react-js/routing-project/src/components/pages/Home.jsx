import React, { useState } from 'react'
import Header from '../common/Header'

export default function Home() {
    let [count,setCount]=useState(1)
  return (
    <>
        

        <section className='py-10'>
            
            <HomeChild count={count} setCount={setCount}/>
            <div className='max-w-[1320px] mx-auto'>
                <h1 className='font-bold text-center text-4xl py-5'>Home Page</h1>
                <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
                 <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
                 <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
                 <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
                 <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
                 <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
                 <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
                 <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
                 <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
                 <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
                 <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
                 <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
                 <p className='text-[18px] leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum saepe, accusantium similique molestiae unde eum, laborum a at explicabo nemo reprehenderit ab nostrum illum. Ipsa impedit ut perspiciatis eligendi?
                </p>
            </div>
            
        </section>
    </>
  )
}


function HomeChild({count,setCount}){
    
    return(
        <div className='max-w-[500px] border-1 p-5 mx-auto'>
            <h1 className='font-bold text-center text-4xl'>{count}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sunt? Eius sunt architecto adipisci in ratione perferendis rerum amet necessitatibus earum doloremque provident ipsum ducimus quod, non laudantium sapiente deleniti.</p>
            <button onClick={()=>setCount(count+1)} className='bg-red-500 p-3 cursor-pointer'>Change Count</button>
        </div>
    )
}