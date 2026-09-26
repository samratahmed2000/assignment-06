"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import Link from "next/link";
import React, { useContext } from "react";

const NavBadge = () => {
  const {
    addToday = [],
    saved = [],
    activeTab,
    setActiveTab,
  } = useContext(WorkoutsContext);

  const todayCount = addToday.length;
  const savedCount = saved.length;

  const currentWorkouts = activeTab === "today" ? addToday : saved;
  const totalExercises = currentWorkouts.length;

  return (
    <div className="flex gap-6">
      <Link
        href="/my-plan"
        onClick={() => setActiveTab("today")}
        className="flex gap-2 items-center text-[12px] font-medium"
      >
        <span
          className={
            activeTab === "today" ? "text-[#D1D5DB]" : "text-[#9CA3AF]"
          }
        >
          Plan
        </span>
        <span className="bg-[#C2F800] text-black px-1 py-0.5 rounded-full">
          {todayCount}
        </span>
      </Link>
      <Link
        href="/my-plan"
        onClick={() => setActiveTab("saved")}
        className="flex gap-2 items-center text-[12px] font-medium"
      >
        <span
          className={
            activeTab === "saved" ? "text-[#D1D5DB]" : "text-[#9CA3AF]"
          }
        >
          Saved
        </span>
        <span className="border border-[#2D313B] px-1 py-0.5 rounded-full">
          {savedCount}
        </span>
      </Link>
    </div>
  );
};

export default NavBadge;
