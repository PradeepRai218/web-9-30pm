export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Contact Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Address: Claritas est etiam processus dynamicus</p>
            <p className="mb-2">
              Phone:{" "}
              <a href="tel:98745612330" className="text-blue-400 hover:underline">
                98745612330
              </a>
            </p>
            <p className="mb-4">Email: furnitureinfo@gmail.com</p>

            <ul className="flex gap-4 text-xl">
              <li><a href="https://facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://linkedin.com" target="_blank"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://youtube.com" target="_blank"><i className="ion-social-youtube"></i></a></li>
              <li><a href="https://telegram.com" target="_blank"><i className="fa fa-telegram"></i></a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:text-white">About Us</a></li>
              <li><a href="/contact-us" className="hover:text-white">Contact Us</a></li>
              <li><a href="/frequently-questions" className="hover:text-white">Frequently Questions</a></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">My Account</h3>
            <ul className="space-y-2">
              <li><a href="/my-dashboard" className="hover:text-white">My Dashboard</a></li>
              <li><a href="/wishlist" className="hover:text-white">Wishlist</a></li>
              <li><a href="/cart" className="hover:text-white">Cart</a></li>
              <li><a href="/checkout" className="hover:text-white">Checkout</a></li>
            </ul>
          </div>

          {/* Top Rated Products */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Top Rated Products</h3>

            {/* Product Item */}
            <div className="flex gap-4 mb-4">
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615225341228Ganthur%20Sheesham%20Wood%20Sofa%20Set___.jpg"
                alt=""
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <span className="text-sm text-gray-400">2 Seater Sofa</span>
                <h4 className="text-white text-sm font-medium">
                  Ganthur Sheesham Wood Sofa Set
                </h4>
                <p className="text-sm">
                  <span className="line-through mr-2">Rs. 8,000</span>
                  <span className="text-green-400">Rs. 7,600</span>
                </p>
              </div>
            </div>

            {/* Product Item */}
            <div className="flex gap-4">
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1619988418966Leo%20TV%20Cabinets.jpg"
                alt=""
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <span className="text-sm text-gray-400">TV Units</span>
                <h4 className="text-white text-sm font-medium">
                  Leo TV Cabinets
                </h4>
                <p className="text-sm">
                  <span className="line-through mr-2">Rs. 26,000</span>
                  <span className="text-green-400">Rs. 21,000</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Menu */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/online-store" className="hover:text-white">Online Store</a></li>
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/term-of-use" className="hover:text-white">Terms Of Use</a></li>
          </ul>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            All Rights Reserved By Furniture | © 2025
          </p>
          <img
            src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png"
            alt=""
            className="mt-4 md:mt-0"
          />
        </div>

      </div>
    </footer>
  );
}
