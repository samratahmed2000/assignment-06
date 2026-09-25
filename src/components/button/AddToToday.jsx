"use client";

import Link from "next/link";
import React from "react";
import { LuCalendarPlus2 } from "react-icons/lu";

const AddToTodayButton = () => {
  return (
    <Link href="/my-plan">
      <button className="bg-[#CCFF00] text-[14px] text-[#0F1115] font-semibold px-5 py-3 flex justify-between items-center gap-2 rounded-2xl">
        <LuCalendarPlus2 /> Add to today&apos;s plan
      </button>
    </Link>
  );
};

export default AddToTodayButton;
