"use client";

import React from "react";

const BrowseWorkout = () => {
  const scrollToSection = () => {
    const element = document.getElementById("workouts");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="bg-[#C2F800] text-black text-[12px] font-bold text-center px-6 py-3 rounded-[10px] scroll-smooth hover:text-[#E5E7EB] hover:bg-[#0F1115] hover:border hover:border-[#E5E7EB] hover:cursor-pointer"
      onClick={() => scrollToSection()}
    >
      BROWSE WORKOUTS
    </button>
  );
};

export default BrowseWorkout;
