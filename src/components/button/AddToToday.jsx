"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";

const AddToTodayButton = ({ workout }) => {
  const { addToday, setAddToday } = useContext(WorkoutsContext);

  const handleAddToToday = () => {
    const isAlreadyAdded = addToday.some((item) => item.id === workout.id);
    const isLimitReached = addToday.length >= 5;

    if (isAlreadyAdded) {
      return toast.warning(`"${workout.name}" is Already in Today's Plan!`);
    }

    if (isLimitReached) {
      return toast.warning("Add Only Up to 5 Workouts for Today!");
    }

    setAddToday([...addToday, workout]);
    toast.success(`Successfully Added "${workout.name}" to Today's Plan`);
  };

  return (
    <button
      onClick={() => handleAddToToday()}
      className={`bg-[#CCFF00] text-[14px] text-[#0F1115] font-semibold px-5 py-3 flex justify-between items-center gap-2 rounded-2xl`}
    >
      <LuCalendarPlus2 /> Add to today&apos;s plan
    </button>
  );
};

export default AddToTodayButton;
