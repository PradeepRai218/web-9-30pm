import React, { useState } from 'react'
import { RiDashboard3Line } from "react-icons/ri";
import { Link } from 'react-router';
import { FaChevronUp, FaEnvelope, FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function SideBar() {

    let [openMenu,setOpenMenu]=useState(0)
  return (
    <div className='h-screen border-1 shadow-lg'>
        <div className='border-b-1 border-[#ccc] py-3'>
            <img className='mx-auto' src="/images/wscube-tech-logo-2.svg" alt="" />
        </div>

        <h3 className='' >
           <Link className='flex items-center gap-3 p-3 font-bold' to={'/dashboard'}> <RiDashboard3Line/>   Dashboard </Link> 
        </h3>
        <hr/>
        <div className='p-2'>

            <div onClick={()=>setOpenMenu(openMenu==1? 0 : 1)}  className=' cursor-pointer flex items-center gap-3 p-2 font-bold relative'>
                 <FaUser/>  Users  
                  {
                    openMenu==1 ?  <FaChevronUp className='absolute right-0'/> :  <FaChevronDown className='absolute right-0'/>
                  }
                  
            </div> 
            {
                openMenu==1 && 
                <ul className='px-3 py-2'>
                    <li>
                        <Link to={'/user'}> View User</Link></li>
                </ul>
            }
             

        </div>

         <div className='p-2'>

            <div onClick={()=>setOpenMenu(openMenu==2? 0 : 2)}  className=' cursor-pointer flex items-center gap-3 p-2 font-bold relative'>
                 <FaEnvelope/>  Enquiry  
                  {
                    openMenu==2 ?  <FaChevronUp className='absolute right-0'/> :  <FaChevronDown className='absolute right-0'/>
                  }
                  
            </div> 
            {
                openMenu==2 && 
                <ul className='px-3 py-2'>
                    <li>Contact Enquirys</li>
                      <li>Newsletters</li>
                </ul>
            }
             

        </div>
    </div>
  )
}
