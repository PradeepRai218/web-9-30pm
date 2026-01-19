import React, { useContext } from 'react'
import { myGlobalContext } from '../../context/MainContext'

export default function Footer() {
 let {count} =useContext(myGlobalContext)
  return (
    <div>Footer {count}</div>
  )
}
