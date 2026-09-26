"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const linkStyle = "px-4 py-1.5 rounded-full transition-all duration-300";
  const activeStyle = "bg-[#1d2416] text-[#b4f54c] font-bold";
  const inactiveStyle = "text-[#D1D5DB] hover:text-white";

  return (
    <Link
      href={href}
      className={`${linkStyle} ${pathname === href ? activeStyle : inactiveStyle}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
