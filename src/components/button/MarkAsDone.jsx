"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { useContext } from "react";
import { MdDone } from "react-icons/md";
import { toast } from "react-toastify";

const MarkAsDoneButton = ({ workout }) => {
  const { addToday, setAddToday } = useContext(WorkoutsContext);

  const handleMarkAsDone = () => {
    const updatedList = addToday.filter((item) => item.id !== workout.id);
    setAddToday(updatedList);

    toast.success(`"${workout.name}" Done!`);
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={() => handleMarkAsDone()}
        className="bg-[#CCFF00] text-[14px] text-[#0F1115] font-semibold px-4 py-2 flex justify-between items-center gap-2 rounded-2xl hover:text-[#E5E7EB] hover:bg-[#0F1115] hover:border hover:border-[#E5E7EB] hover:cursor-pointer"
      >
        <MdDone />
        Mark as Done
      </button>
    </div>
  );
};

export default MarkAsDoneButton;
