import React, { useContext } from "react";
import Header from "../common/Header";
import { myGlobalContext } from "../../context/MainContext";

export default function Cart() {
  let { cart, setCart } = useContext(myGlobalContext);

  // let total=cart.reduce


  

  let cartTot= cart.reduce( (tot,obj)=> tot+= obj.qty*obj.price , 0 )



  return (
    <>
     
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
          
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Item</th>
                        <th className="py-3 px-4 text-center">Qty</th>
                        <th className="py-3 px-4 text-right">Price</th>
                        <th className="py-3 px-4 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {
                      
                      cart.map((obj, index) => (
                        <CartRow data={obj} key={index}/>
                      ))
                      
                      
                      }
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
                  <div className="space-y-4 border-b border-gray-200 pb-4 mb-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal: {cartTot}</span>
                      <span>Rs </span>
                    </div>
                  </div>
                  <div className="flex justify-between text-2xl font-bold text-gray-800 mb-6">
                    <span>Total: {cartTot} </span>
                    <span className="text-blue-600">Rs </span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition mb-3">
                    Checkout
                  </button>
                  <button className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold py-3 rounded-lg transition">
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Your cart is empty</p>
            </div>
          )}
        </div>
      </div>
    </>
   
      
   
  );
}


function CartRow({data}){

  let {id}=data

  let {cart,setCart}=useContext(myGlobalContext)

  let updateQty=(e)=>{
    let qty=e.target.value
      console.log(id,e.target.value);

      let updatedCart=cart.filter((obj)=>{
        if(obj.id==id){
             obj['qty'] =  qty
        } 
        return obj  
      })

      setCart(updatedCart);
      
      
  }

  return(
    <tr  className="hover:bg-gray-50 transition">
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-4">
                              <img src={data.image} alt={data.name} className="w-16 h-16 dataect-cover rounded" />
                              <span className="font-medium text-gray-800">{data.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <input type="number" onChange={updateQty} min={1} max={10} value={data.qty} className="w-16 px-2 py-1 border border-gray-300 rounded text-center" />
                          </td>
                          <td className="py-4 px-4 text-right font-medium">Rs {data.price}</td>
                          <td className="py-4 px-4 text-right font-bold text-blue-600">Rs {(data.price * data.qty)}</td>
                        </tr>
  )
}