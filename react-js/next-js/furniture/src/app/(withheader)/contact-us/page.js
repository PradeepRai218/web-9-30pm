import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'

export default function Contactus() {
  return (
    <div>
        <Breadcrumb  title="Contact Us"/>

        <div className='max-w-[1320px] mx-auto'>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.632444699081!2d73.02792007451527!3d26.27358997703384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c37b277d1c3%3A0x1412272be9646840!2sWsCube%20Tech%20%7C%20Digital%20Marketing%2C%20Data%20Analytics%20%26%20Web%20Development%20Courses%20in%20Jodhpur!5e0!3m2!1sen!2sin!4v1767631102504!5m2!1sen!2sin"
  width={"100%"}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
    </div>
  )
}
