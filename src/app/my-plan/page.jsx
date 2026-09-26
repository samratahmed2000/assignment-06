"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";

const MyPlanPage = () => {
  const { addToday, saved } = useContext(WorkoutsContext);

  return (
    <section className="container mx-auto py-6 mt-8">
      <h2 className="text-[30px] font-oswald font-bold ">MY PLAN</h2>
      <p className="text-[#8A92A0] text-[14px] font-normal mb-6">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="text-[#8A92A0] text-[12px] font-normal flex justify-between items-center py-12 px-6 border border-[#232732] rounded-2xl bg-[#13161D] ">
        <p>Exercises</p>

        <p>Minutes</p>

        <p>Calories</p>
      </div>
    </section>
  );
};

export default MyPlanPage;
