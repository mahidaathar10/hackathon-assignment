"use client";

import Link from "next/link";


const Navbar = () => {
  

  return (
    <nav className="w-full bg-white pt-[14px] pb-[14px]">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0">
        <div className="hidden md:flex gap-8 ml-3">
          <Link href="/" className="text-[#007580] text-[14px] font-medium">
            Home
          </Link>
          <Link href="/all" className="text-[14px] font-medium">
            Shop
          </Link>
          <Link href="/new" className="text-[14px] font-medium">
            Product
          </Link>
          <Link href="/all" className="text-[14px] font-medium">
            Pages
          </Link>
          <Link href="/about" className="text-[14px] font-medium">
            About
          </Link>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;