import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router'
import Header from './Header'

export default function MainLayout() {
  return (
    <section className='grid gap-5 grid-cols-[15%_auto]'>
        <SideBar/>
        <div>
            <Header/>
            <Outlet/>
        </div>
    </section>
  )
}
