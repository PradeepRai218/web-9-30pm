import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { Link } from "react-router";
import { FaXmark } from "react-icons/fa6";

export default function Header() {
  let [count, setCount] = useState(0);

  let addtoCart = () => {
    setCount(count + 1);
    //  alert("hello")
  };

  // let addData=(n,m)=>{
  //   alert(n+m)
  // }
  let [modalStatus,setModalstatus]=useState(false)

  return (
    <>
    
    {
      modalStatus &&
      <div onClick={()=>setModalstatus(false)} className="fixed w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] z-2"></div>
    }
      
      <div
        className={`lg:w-[400px] border-1 border-[#ccc] shadow-lg fixed bg-white left-[50%] translate-x-[-50%]  duration-200 ${ modalStatus? 'top-[50%]' : 'top-[-1000px]'  }   translate-y-[-50%] z-2`}
      >
        <span onClick={()=>setModalstatus(false)} className="absolute right-[10px] text-3xl cursor-pointer">
          <FaXmark />
        </span>
        <div className="border border-purple-500 bg-white">
          <div className="p-5 space-y-5 shadow-xl">
            <h4 className="text-center text-3xl">Contact Us</h4>
            <form>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                  placeholder="Phone"
                />
                <textarea
                  cols={10}
                  rows={5}
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                  placeholder="Write your message..."
                  defaultValue={""}
                />
              </div>
              <input
                type="submit"
                defaultValue="Send Message"
                className="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
              />
            </form>
          </div>
        </div>
      </div>

      <header className="sticky top-0 bg-white">
        <nav className="bg-neutral-primary  w-full z-20 top-0 start-0 border-b border-default">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-7"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about-us"}
                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/login"}
                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services"}
                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >
                    Services
                  </Link>
                </li>
                <li className="flex gap-2">
                  {/* <button onClick={()=>addData(25,66)} class="bg-red-500">Add </button>

                 <button onClick={addtoCart} class="bg-red-500">Add to Cart </button>

                 <button onClick={
                  ()=>{
                    alert("Hello")
                  }
                 } class="bg-red-500">Add to Cart </button> */}
                  <button onClick={addtoCart} class="bg-red-500">
                    Add to Cart
                  </button>

                  <Link
                    to={"/cart"}
                    className="flex i gap-3 py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >
                    Cart{" "}
                    <span className="flex items-center">
                      <BsCart className="text-red-500 text-3xl" /> ({count})
                    </span>
                  </Link>
                </li>

                <li>
                  <button onClick={()=>setModalstatus(true)} className="bg-amber-700 text-white p-3 rounded-[10px] cursor-pointer">
                    Enquire Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
