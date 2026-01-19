"use client";
import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";

export default function Auth() {
  let [otpStatus, setOtpStatus] = useState(false);

  let handleRegister=(e)=>{
    e.preventDefault()
    //Regsiter ->
 
    setOtpStatus(true)
  }
  return (
    <div>
      <Breadcrumb title="My Account" />
      <div className="max-w-[1320px] mx-auto grid gap-10 grid-cols-2 py-10">
        <div className="p-5 shadow-sm border border-[#ccc]">
          <h2 className="font-bold text-2xl mb-5">Login</h2>
          <form>
            <div className="mt-5">
              <label className="block mb-2 font-semibold">
                Username or email address{" "}
              </label>
              <input className="w-full border p-2 outline-none" type="text" />
            </div>
            <div className="mt-5">
              <label className="block mb-2 font-semibold">Password </label>
              <input
                className="w-full border p-2 outline-none"
                type="password"
              />
            </div>
            <div className="mt-5">
              <button className="bg-black text-white px-5 py-2">Login</button>
            </div>
          </form>
        </div>
        <div className="p-5 shadow-sm border border-[#ccc]">
          {otpStatus ? (
            <div>
              <h3 className="font-bold text-lg mt-5">Check OTP</h3>
              <form>
                <div className="mt-5">
                  <label className="block mb-2 font-semibold">Enter OTP</label>
                  <input
                    className="w-full border p-2 outline-none"
                    type="text"
                  />
                </div>
                <div className="mt-5">
                  <button className="bg-black text-white px-5 py-2">
                    {" "}
                    Verify OTP
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <h2 className="font-bold text-2xl mb-5">Register</h2>
              <form onSubmit={handleRegister}>
                <div className="mt-5">
                  <label className="block mb-2 font-semibold">Name</label>
                  <input
                    className="w-full border p-2 outline-none"
                    type="text"
                  />
                </div>
                <div className="mt-5">
                  <label className="block mb-2 font-semibold">Email</label>
                  <input
                    className="w-full border p-2 outline-none"
                    type="text"
                  />
                </div>
                <div className="mt-5">
                  <label className="block mb-2 font-semibold">Password</label>
                  <input
                    className="w-full border p-2 outline-none"
                    type="text"
                  />
                </div>
                <div className="mt-5">
                  <label className="block mb-2 font-semibold">Phone</label>
                  <input
                    className="w-full border p-2 outline-none"
                    type="text"
                  />
                </div>
                <div className="mt-5">
                  <button className="bg-black text-white px-5 py-2">
                    Register
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
