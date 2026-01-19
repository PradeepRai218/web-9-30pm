import Link from "next/link";
import Image from "next/image";
import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaAngleDown,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full">
      {/* ================= Header Top ================= */}
      <div className="bg-white text-black text-sm border-b-1">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
          <p>
            Contact us 24/7 : +91-98745612330 / furnitureinfo@gmail.com
          </p>
          <Link
            href="/login-register"
            className="mt-2 md:mt-0 hover:text-yellow-400"
          >
            Login / Register
          </Link>
        </div>
      </div>

      {/* ================= Header Middle ================= */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
              alt="Logo"
              width={150}
              height={60}
            />
          </Link>

          {/* Search */}
          <form className="hidden md:flex flex-1 max-w-lg relative">
            <input
              type="text"
              placeholder="Search product..."
              className="w-full border rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
              <FaSearch />
            </button>
          </form>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link href="/wishlist">
              <FaHeart className="text-xl text-gray-700 hover:text-yellow-500" />
            </Link>

            {/* Cart */}
            <div className="relative group">
              <FaShoppingCart className="text-xl text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                0
              </span>

              {/* Mini Cart */}
              <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-md p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <p className="text-center text-gray-500">
                  Your shopping cart is empty!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Header Bottom ================= */}
      <div className="sticky top-0 bg-white shadow z-50">
        <nav className="max-w-7xl mx-auto px-4">
          <ul className="flex gap-6 py-4 items-center">
            <li>
              <Link href="/" className="font-medium hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="font-medium hover:text-yellow-500">
                Product
              </Link>
            </li>

            <li>
              <Link href="/product-server" className="font-medium hover:text-yellow-500">
                Product Server
              </Link>
            </li>


            {/* Living */}
            <li className="relative group">
              <button className="flex items-center gap-1 font-medium">
                Living <FaAngleDown className="text-sm" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <p className="font-semibold mb-2">Tables</p>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/categories/side-and-end-tables">
                      Side & End Tables
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/coffee-tables">
                      Coffee Tables
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Sofa */}
            <li className="relative group">
              <button className="flex items-center gap-1 font-medium">
                Sofa <FaAngleDown className="text-sm" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <ul className="space-y-1 text-sm">
                  <li><Link href="/categories/1-seater-sofa">1 Seater Sofa</Link></li>
                  <li><Link href="/categories/2-seater-sofa">2 Seater Sofa</Link></li>
                  <li><Link href="/categories/3-seater-sofa">3 Seater Sofa</Link></li>
                </ul>
              </div>
            </li>

            {/* Pages */}
            <li className="relative group">
              <button className="flex items-center gap-1 font-medium">
                Pages <FaAngleDown className="text-sm" />
              </button>
              <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg p-3 space-y-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition text-sm">
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/cart">Cart</Link></li>
                <li><Link href="/checkout">Checkout</Link></li>
              </ul>
            </li>

            <li>
              <Link href="/contact-us" className="font-medium hover:text-yellow-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
