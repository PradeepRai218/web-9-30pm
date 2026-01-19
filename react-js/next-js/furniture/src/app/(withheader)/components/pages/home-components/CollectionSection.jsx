import React from 'react'

export default function CollectionSection() {
  return (
    <section className='py-10'> 
        <div className='max-w-[1320px] mx-auto grid gap-5 lg:grid-cols-3 grid-cols-1'>
            <CollectionItems/>
             <CollectionItems/>
              <CollectionItems/>
        </div>
    </section>
  )
}


function CollectionItems(){
    return(
        <div className='shadow-lg relative group overflow-hidden'>
            <img className='img-fluid duration-300 group-hover:scale-125' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="" />
            <div className='absolute text-white top-0 p-8 w-[100%] h-[100%]  bg-[rgba(0,0,0,0.5)]'>
                <h3>Design Creative</h3>
                <h2 className='text-2xl font-bold'>Chair Collection</h2>
            </div>
        </div>
    )
}