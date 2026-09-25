import Link from "next/link";
import React from "react";
import { Oswald } from "next/font/google";
import logo from "@/assets/logo.png";
import Image from "next/image";

const oswald = Oswald({
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="border-b border-gray-50/30 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" />
          <span className={`font-bold text-[18px] ${oswald.className}`}>
            FITLOG
          </span>
        </Link>

        <div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Workout</Link>
            </li>
            <li>
              <Link href="/my-plan">My Plan</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-6">
          <Link href="/my-plan" className="flex gap-2 items-center">
            <span>Plan</span>
            <span></span>
          </Link>
          <Link href="/my-plan" className="flex gap-2 items-center">
            <span>Saved</span>
            <span></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
