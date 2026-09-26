"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";

const AddToTodayButton = ({ workout }) => {
  const { addToday, setAddToday } = useContext(WorkoutsContext);

  const handleAddToToday = () => {
    setAddToday([...addToday, workout]);
    toast.success(`Successfully Added "${workout.name}" to Today's Plan`);
  };

  return (
    <button
      onClick={() => handleAddToToday()}
      className="bg-[#CCFF00] text-[14px] text-[#0F1115] font-semibold px-5 py-3 flex justify-between items-center gap-2 rounded-2xl"
    >
      <LuCalendarPlus2 /> Add to today&apos;s plan
    </button>
  );
};

export default AddToTodayButton;
