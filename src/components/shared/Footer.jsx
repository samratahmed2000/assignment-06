import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "@/assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#090A0D] py-12 border-t border-[#1A1D24]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={footerLogo}
              alt="footer logo"
              width={80}
              height={80}
              className="w-4 h-3"
            />
            <span className="font-oswald font-bold text-[18px] text-white">
              FITLOG
            </span>
          </Link>
        </div>

        <p className="text-[12px] text-[#6B7280] font-normal">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
