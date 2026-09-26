import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import NavBadge from "../button/NavBadge";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="border-b border-[#222630] py-6 sticky top-0 backdrop-blur-2xl z-50 text-[#D1D5DB]">
      <div className="container mx-auto flex justify-between items-center">
        <GiHamburgerMenu className="font-bold text-white  md:hidden" />

        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" />
          <span className="font-oswald font-bold text-[18px]">FITLOG</span>
        </Link>

        <div>
          <ul className="hidden md:flex items-center gap-4 text-[12px] font-semibold">
            <li>
              <Link href="/">Workout</Link>
            </li>
            <li>
              <Link href="/my-plan">My Plan</Link>
            </li>
          </ul>
        </div>

        <NavBadge />
      </div>
    </nav>
  );
};

export default Navbar;
