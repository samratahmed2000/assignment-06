"use client";

import AddTodayCard from "@/components/shared/AddTodayCard";
import SavedCard from "@/components/shared/SavedCard";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import Link from "next/link";
import React, { useContext } from "react";

const MyPlanPage = () => {
  const { addToday, saved, activeTab, setActiveTab } =
    useContext(WorkoutsContext);

  return (
    <section className="container mx-auto py-6 mt-8">
      <div>
        <h2 className="text-[30px] font-oswald font-bold text-white">
          MY PLAN
        </h2>
        <p className="text-[#8A92A0] text-[14px] font-normal mb-6">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="text-[#8A92A0] text-[12px] font-normal flex justify-between items-center py-12 px-6 border border-[#232732] rounded-2xl bg-[#13161D]">
          <p>Exercises</p>

          <p>Minutes</p>

          <p>Calories</p>
        </div>

        <div className="flex gap-3 items-center">
          <span className="text-[#8A92A0] text-[12px] font-normal ">
            Sort By
          </span>
          <select className="select appearance-none bg-[#13161D] text-white">
            <option disabled={true}>Pick a color</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>

        <div className="my-8">
          <div className="tabs tabs-box bg-[#13161D]">
            <input
              type="radio"
              name="my_tabs_6"
              className="tab text-[#8A92A0] bg-[#13161D] border border-[#232732]"
              aria-label="Today's Plan"
              checked={activeTab === "today"}
              onChange={() => setActiveTab("today")}
            />
            <div className="tab-content bg-[#13161D] border border-[#232732] p-18">
              {activeTab === "today" &&
                (addToday.length > 0 ? (
                  addToday.map((workout) => {
                    return (
                      <AddTodayCard
                        key={workout.id}
                        workout={workout}
                      ></AddTodayCard>
                    );
                  })
                ) : (
                  <div className="flex flex-col items-center">
                    <h2 className="font-oswald font-bold text-[30px] text-white">
                      NOTHING HERE YET
                    </h2>
                    <p className="text-[#A1A1AA] text-[12px] font-normal pb-6">
                      Browse the library and add a lift to get today moving.
                    </p>
                    <Link href={`/workout-details`}>
                      <button className="text-[12px] font-semibold text-black bg-[#C2F10D] px-6 py-3 rounded-2xl">
                        Go to workouts
                      </button>
                    </Link>
                  </div>
                ))}
            </div>

            <input
              type="radio"
              name="my_tabs_6"
              aria-label="Saved"
              className="tab text-white bg-[#13161D] border border-[#232732]"
              checked={activeTab === "saved"}
              onChange={() => setActiveTab("saved")}
            />
            <div className="tab-content bg-[#13161D] border-[#232732] p-18">
              {activeTab === "saved" &&
                (saved.length > 0 ? (
                  saved.map((workout) => {
                    return (
                      <SavedCard key={workout.id} workout={workout}></SavedCard>
                    );
                  })
                ) : (
                  <div className="flex flex-col items-center">
                    <h2 className="font-oswald font-bold text-[30px] text-white">
                      NOTHING HERE YET
                    </h2>
                    <p className="text-[#A1A1AA] text-[12px] font-normal pb-6">
                      Browse the library and add a lift to get today moving.
                    </p>

                    <Link href={`/workout-details`}>
                      <button className="text-[12px] font-semibold text-black bg-[#C2F10D] px-6 py-3 rounded-2xl">
                        Go to workouts
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPlanPage;
