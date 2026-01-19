

import { getProductDetails } from '@/app/api-services/productApi'
import React from 'react'
import SingleDetails from '../../components/product/SingleDetails';

export default async function ProductDetails({params}) {
//    let {pid}  =useParams() //client
let {pid}=await params //Server Side Url Id get

let data=await getProductDetails(pid)

  return (
    <div>
        {
          data &&   <SingleDetails data={data}/> 
        }
        
    </div>
  )
}
