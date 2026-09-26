"use client";

import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveForLaterButton = ({ workout }) => {
  const { saved, setSaved } = useContext(WorkoutsContext);

  const handleSaveForLater = () => {
    const isAlreadyAdded = saved.some((item) => item.id === workout.id);
    const isLimitReached = saved.length >= 5;

    if (isAlreadyAdded) {
      return toast.warning(`"${workout.name}" is Already in Saved!`);
    }

    if (isLimitReached) {
      return toast.warning("Add Only Up to 5 Workouts for Saved!");
    }

    setSaved([...saved, workout]);
    toast.success(`Successfully Added "${workout.name}" to Saved`);
  };

  return (
    <button
      onClick={() => handleSaveForLater()}
      className="text-[14px] text-[#E5E7EB] font-medium border border-[#374151] px-5 py-3 flex justify-between items-center gap-2 rounded-2xl"
    >
      <FaRegBookmark /> Save for later
    </button>
  );
};

export default SaveForLaterButton;
