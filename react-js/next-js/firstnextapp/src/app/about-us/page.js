import React from 'react'

export default function Aboutus() {
  return (
   <section className="pt-16 pb-16 lg:pb-24">
  <div className="max-w-[1202px] mx-auto px-4">
    {/* Breadcrumb + Heading */}
    <div className="mb-11">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3 overflow-x-auto">
        <ol className="flex items-center space-x-2 text-sm whitespace-nowrap">
          <li>
            <a href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </a>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-500 font-medium">About Us</li>
        </ol>
      </nav>
      {/* Title */}
      <h1 className="text-2xl lg:text-[28px] font-medium leading-7 lg:leading-[42px] mb-7 text-[#17132E]">
        About Us
      </h1>
      {/* Description */}
      <div className="text-gray-600 text-base leading-6">
        <p>
          Welcome to Surana Realtors, the leading real estate broker in Jodhpur.
          Here, we are always ready and conveniently motivated to help you with
          any query and requirement about your real estate property urgency.
          Surana Realtors is your one-stop solution for buying, selling, or
          renting property with trusted developers.
        </p>
      </div>
    </div>
    {/* Content Section */}
    <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-10 items-start">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-[552px] w-full mx-auto lg:mx-0 order-2 lg:order-1">
        <div className="rounded-xl bg-gray-100 p-4 lg:p-6 text-center lg:text-left">
          <h3 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-2">
            <span className="Count">34</span>+
          </h3>
          <p className="text-sm lg:text-base text-gray-600">
            Year of Experience
          </p>
        </div>
        <div className="rounded-xl bg-gray-100 p-4 lg:p-6 text-center lg:text-left">
          <h3 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-2">
            <span className="Count">250</span>+
          </h3>
          <p className="text-sm lg:text-base text-gray-600">
            Properties Listed
          </p>
        </div>
        <div className="rounded-xl bg-gray-100 p-4 lg:p-6 text-center lg:text-left">
          <h3 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-2">
            <span className="Count">4,100</span>+
          </h3>
          <p className="text-sm lg:text-base text-gray-600">Successful Deals</p>
        </div>
        <div className="rounded-xl bg-gray-100 p-4 lg:p-6 text-center lg:text-left">
          <h3 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-2">
            <span className="Count">2,200</span>+
          </h3>
          <p className="text-sm lg:text-base text-gray-600">Happy Customers</p>
        </div>
      </div>
      {/* Video / Slider Section */}
      <div className="w-full max-w-[578px] mx-auto lg:mx-0 order-1 lg:order-2">
        <div className="rounded-xl overflow-hidden relative">
          {/* Slick Slider (JS Classes kept) */}
          <div className="slick-slider slick-initialized">
            <div className="relative rounded-xl overflow-hidden">
              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img
                  src="/images/icons/play-icon.svg"
                  alt="play"
                  className="w-20 h-20 cursor-pointer"
                />
              </div>
              {/* Image */}
              <img
                src="https://d16kjtvjhtbb3d.cloudfront.net/prod/uploads/video-gallery/freepik__please-expand-the-background-of-this-image-only-us__54280 (1).png"
                alt="property-video"
                className="w-full h-[282px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
