"use client";

import Link from "next/link";
import React from "react";

const NavBadge = () => {
  return (
    <div className="flex gap-6">
      <Link
        href="/my-plan"
        className="flex gap-2 items-center text-[12px] font-medium"
      >
        <span className="text-[#D1D5DB]">Plan</span>
        <span className="bg-[#C2F800] text-black px-1 py-0.5 rounded-full">
          20
        </span>
      </Link>
      <Link
        href="/my-plan"
        className="flex gap-2 items-center text-[12px] font-medium"
      >
        <span className=" text-[#9CA3AF]">Saved</span>
        <span className="border border-[#2D313B] px-1 py-0.5 rounded-full">
          20
        </span>
      </Link>
    </div>
  );
};

export default NavBadge;
