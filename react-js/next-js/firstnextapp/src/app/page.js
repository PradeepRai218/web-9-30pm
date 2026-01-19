import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   <section className="pt-24 pb-24 overflow-hidden">
      <div className="max-w-[1202px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[25px] lg:text-[32px] font-medium leading-[38px] lg:leading-[48px] text-[#17132E] mb-3">
            Our Most Impactful Properties
          </h2>
          <p className="text-base text-gray-500">
            Driving Change Through Innovation and Excellence.
          </p>
        </div>

        {/* Slider Wrapper (use Slick/Swiper here) */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {/* Card */}
          <div className="min-w-[350px] max-w-[350px] bg-white border border-gray-200 rounded-xl overflow-hidden">
            {/* Image */}
            <div className="relative h-[227px]">
              <img
                src="https://d16kjtvjhtbb3d.cloudfront.net/prod/uploads/property-media/Screenshot%202025-07-02%20131955.png"
                alt="Property"
                fill
                className="object-cover"
              />

              {/* Badges */}
              <div className="absolute top-3 right-3 flex overflow-hidden rounded">
                <span className="text-[11px] font-bold px-2 py-1 bg-green-600 text-white uppercase">
                  Residential Plot
                </span>
                <span className="text-[11px] font-bold px-2 py-1 bg-red-600 text-white uppercase">
                  For Sale
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <Link href="/listed-properties/residential-plot-in-shastri-nagar">
                <h3 className="text-lg font-medium text-[#17132E] mb-2 line-clamp-2 hover:text-red-600 transition">
                  Residential Plot in Shastri Nagar
                </h3>
              </Link>

              <p className="text-sm text-gray-500 mb-4">
                📍 Shastri Nagar
              </p>

              <div className="bg-gray-100 text-sm text-center py-2 rounded mb-4">
                Area: <span className="font-medium">600 Sq Yards</span>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 pb-5 flex items-center justify-between">
              <p className="text-xl font-medium text-red-600">
                <span className="text-sm text-gray-400 mr-1">Price</span>
                ₹ 9 Cr
              </p>

              <Link href="/listed-properties/residential-plot-in-shastri-nagar">
                <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition">
                  More Details →
                </button>
              </Link>
            </div>
          </div>

          {/* Duplicate card → map real data here */}
        </div>
      </div>
    </section>
  );
}
