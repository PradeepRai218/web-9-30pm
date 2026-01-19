import React from 'react'
import ProductList from '../components/product/ProductList'
import { getProducts } from '@/app/api-services/productApi'

export default async function ProductServer() {

   let data  =await getProducts()
   //Api call made on server side
   //Data fetched is sent to ProductList component as props
 
  return (
    <div>
        <ProductList data={data} />
    </div>
  )
}
