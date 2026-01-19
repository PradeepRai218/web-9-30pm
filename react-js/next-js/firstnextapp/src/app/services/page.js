import React from 'react'
import { services, whyChooseUs } from '../data/staticData'
import Link from "next/link";
export default function Services() {
  return (
    <div>
       <section className="bg-[#F8F9FC] py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold text-[#17132E] mb-4">
            Our Real Estate Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end real estate solutions designed to deliver value,
            trust, and long-term growth.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-50 text-red-600 mb-4 text-xl">
                  {service.icon}
                </div>

                <h3 className="text-lg font-medium text-[#17132E] mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="text-sm font-medium text-red-600 hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#F8F9FC] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-[#17132E] mb-12">
            Why Choose Us
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {whyChooseUs.map((item, index) => (
              <div key={index}>
                <h3 className="text-3xl font-semibold text-red-600 mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-[#17132E] mb-12">
            Our Process
          </h2>

          
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">
            Looking to Buy, Sell or Invest?
          </h2>
          <p className="mb-6 text-red-100">
            Connect with our experts and get personalized property solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
