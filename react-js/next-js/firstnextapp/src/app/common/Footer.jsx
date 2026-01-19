import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#F8F8F8] pt-16 lg:pt-24 pb-8 lg:pb-10">
        <section>
          <div className="max-w-[1202px] mx-auto px-4">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-10 lg:mb-24">
              {/* About */}
              <div className="max-w-[265px]">
                <ul className="space-y-4 text-gray-600">
                  <li className="font-medium text-base">
                    About Surana Realtors
                  </li>
                  <li>
                    <p className="text-base font-normal">
                      Proudly radiating the power of undaunted success since
                      1987, Surana Realtors has established its stature as one
                      of Rajasthan’s finest realtors.
                    </p>
                  </li>
                  {/* Social Icons */}
                  <li className="flex gap-3 pt-2">
                    <a
                      href="https://www.facebook.com/suranarealtors"
                      target="_blank"
                      className="w-7 h-7 border border-gray-500 rounded-full flex items-center justify-center"
                    >
                      {/* Facebook SVG */}
                    </a>
                    <a
                      href="https://www.instagram.com/realestatekarealgyaan"
                      target="_blank"
                      className="w-7 h-7 border border-gray-500 rounded-full flex items-center justify-center"
                    >
                      {/* Instagram SVG */}
                    </a>
                    <a
                      href="https://www.linkedin.com/company/suranarealtors/"
                      target="_blank"
                      className="w-7 h-7 border border-gray-500 rounded-full flex items-center justify-center"
                    >
                      {/* LinkedIn SVG */}
                    </a>
                    <a
                      href="https://youtube.com/@realestatekarealgyaan"
                      target="_blank"
                      className="w-7 h-7 border border-gray-500 rounded-full flex items-center justify-center"
                    >
                      {/* YouTube SVG */}
                    </a>
                  </li>
                </ul>
              </div>
              {/* Links */}
              <div className="flex flex-col md:flex-row gap-12 w-full max-w-[738px]">
                {/* Property For */}
                <div className="w-1/2">
                  <h4 className="text-lg font-medium mb-6 text-gray-600">
                    Property For
                  </h4>
                  <ul className="space-y-4 text-gray-600">
                    <li>
                      <a href="/residential-property-jodhpur">Residential</a>
                    </li>
                    <li>
                      <a href="/commercial-property-jodhpur">Commercial</a>
                    </li>
                    <li>
                      <a href="/industrial-property-jodhpur">Industrial</a>
                    </li>
                    <li>
                      <a href="/agricultural-property-jodhpur">Agricultural</a>
                    </li>
                  </ul>
                </div>
                {/* Quick Links */}
                <div className="w-1/2">
                  <h4 className="text-lg font-medium mb-6 text-gray-600">
                    Quick Link
                  </h4>
                  <ul className="space-y-4 text-gray-600">
                    <li>
                      <a href="/rent-a-property">Rent A Property</a>
                    </li>
                    <li>
                      <a href="https://suranarealtors.com/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/terms-and-conditions">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="/privacy">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Newsletter */}
              <div className="max-w-[276px] w-full">
                <h4 className="text-lg font-medium mb-6 text-gray-600">
                  Newsletter
                </h4>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full h-14 px-4 rounded-md border outline-none mb-3"
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium">
                  Subscribe Now
                </button>
              </div>
            </div>
            {/* Divider */}
            <div className="border-t border-red-500 mb-8" />
            {/* Copyright */}
            <div className="text-center text-gray-600 text-base">
              © Surana Realtors - All rights reserved | Design and Developed by
              <a
                href="https://wscubetech.com/"
                target="_blank"
                className="ml-1 underline"
              >
                WsCube Tech
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
