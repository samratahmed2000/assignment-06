"use client";

import Link from "next/link";
import React from "react";

const ViewDetailsButton = ({ workout }) => {
  return (
    <Link href={`/workout-details/${workout.id}`}>
      <button className="text-[14px] text-[#E5E7EB] font-medium border border-[#6B7280] px-4 py-2 flex justify-between items-center gap-2 rounded-2xl hover:bg-[#6B7280]">
        View Details
      </button>
    </Link>
  );
};

export default ViewDetailsButton;
