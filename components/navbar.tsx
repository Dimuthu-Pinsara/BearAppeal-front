"use client";

import {
  Search,
  HelpCircle,
  Heart,
  ShoppingCart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import Image from 'next/image'

export function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  const socialIcons = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <nav className="w-full">
      <div className="w-full bg-[#f6f6f8] text-center py-2 text-sm text-gray-600 border-b border-gray-200 grid grid-cols-3 gap-10">
        <div></div>
        <div>
          <p className="text-[#878787] text-xs leading-6">
            Free shipping for orders over{" "}
            Rs 7500 | 1-3 day delivery
            within Colombo | 1-5 day delivery out of Colombo
          </p>
        </div>
        <div></div>
      </div>

      <div className="w-full bg-white border-b border-gray-200">
        <div className="w-full mx-auto px-4 py-4">
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="flex-1 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="mb-1 flex items-center justify-center">
                  <Image
                        src="/images/logo.png"
                        alt="Picture of the author"
                        width={200}
                        height={52}
                    />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button
                aria-label="Search"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Search size={20} />
              </button>
              <button
                aria-label="Help"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <HelpCircle size={20} />
              </button>
              <button
                aria-label="Wishlist"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Heart size={20} />
              </button>
              <button
                aria-label="Shopping Cart"
                className="relative text-gray-700 hover:text-gray-900 transition-colors"
              >
                <ShoppingCart size={20} />
                {cartCount >= 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
