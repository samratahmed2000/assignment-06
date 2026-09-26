import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

const RemovedButton = ({ workout, type }) => {
  const { addToday, setAddToday, saved, setSaved } =
    useContext(WorkoutsContext);

  const handleRemove = () => {
    if (type === "saved") {
      const updatedSavedList = saved.filter((item) => item.id !== workout.id);
      setSaved(updatedSavedList);

      toast.error(`"${workout.name}" has been Removed from Saved`);
    } else {
      const updatedTodayList = addToday.filter(
        (item) => item.id !== workout.id,
      );
      setAddToday(updatedTodayList);

      toast.error(`"${workout.name}" has been Removed from Today's Plan`);
    }
  };

  return (
    <div>
      <button
        onClick={() => handleRemove()}
        className="text-[#6B7280] font-extrabold"
      >
        <RxCross1 />
      </button>
    </div>
  );
};

export default RemovedButton;
