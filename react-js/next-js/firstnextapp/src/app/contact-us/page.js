import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#F8F9FC] py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold text-[#17132E] mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about buying, selling, or investing in property?
            Our experts are here to help you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 grid gap-12 lg:grid-cols-2">
          
          {/* LEFT - CONTACT INFO */}
          <div>
            <h2 className="text-2xl font-semibold text-[#17132E] mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-8">
              Reach out to us through any of the following ways and we’ll respond
              as quickly as possible.
            </p>

            <div className="space-y-6">
              <ContactItem
                icon="📍"
                title="Office Address"
                text="First Floor, Laxmi Tower, Bhaskar Circle, Ratanada, Jodhpur, Rajasthan 342001"
              />

              <ContactItem
                icon="📞"
                title="Phone"
                text="+91 96495 08382"
              />

              <ContactItem
                icon="✉️"
                title="Email"
                text="care@yourcompany.com"
              />
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-8 flex gap-4">
              <SocialIcon label="Facebook" />
              <SocialIcon label="Instagram" />
              <SocialIcon label="LinkedIn" />
            </div>
          </div>

          {/* RIGHT - CONTACT FORM */}
          <div className="border border-gray-200 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-[#17132E] mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <iframe
            className="w-full h-[400px] rounded-xl border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Bhaskar%20Circle%20Jodhpur&output=embed"
          ></iframe>
        </div>
      </section>
    </>
  );
}

/* COMPONENTS */

function ContactItem({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h4 className="font-medium text-[#17132E]">{title}</h4>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
}

function SocialIcon({ label }) {
  return (
    <Link
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition"
    >
      {label[0]}
    </Link>
  );
}
