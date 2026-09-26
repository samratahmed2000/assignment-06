"use client";

import AddTodayCard from "@/components/shared/AddTodayCard";
import SavedCard from "@/components/shared/SavedCard";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import Link from "next/link";
import React, { useState, useContext } from "react";

const MyPlanPage = () => {
  const {
    addToday = [],
    saved = [],
    activeTab,
    setActiveTab,
  } = useContext(WorkoutsContext);

  const [sortBy, setSortby] = useState("duration");

  const sortWorkout = (workoutList) => {
    if (!workoutList || !Array.isArray(workoutList)) return [];

    const sortedWorkout = [...workoutList];

    if (sortBy === "duration") {
      sortedWorkout.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedWorkout.sort((a, b) => b.calories - a.calories);
    } else if (sortBy === "rating") {
      sortedWorkout.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkout;
  };

  const addTodayWorkouts = sortWorkout(addToday);
  const savedWorkout = sortWorkout(saved);

  const currentWorkouts = activeTab === "today" ? addToday : saved;

  const totalExercises = currentWorkouts.length;

  const totalMinutes = currentWorkouts.reduce(
    (sum, item) => sum + (Number(item.duration) || 0),
    0,
  );

  const totalCalories = currentWorkouts.reduce(
    (sum, item) => sum + (Number(item.caloriesBurned) || 0),
    0,
  );

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
          <div className="flex flex-col">
            <p>Exercises</p>
            <span className="text-[36px] font-bold font-oswald text-[#CCFF00]">
              {totalExercises}
            </span>
          </div>

          <div className="flex flex-col">
            <p>Minutes</p>
            <span className="text-[36px] font-bold font-oswald text-white">
              {totalMinutes}
            </span>
          </div>

          <div className="flex flex-col">
            <p>Calories</p>
            <span className="text-[36px] font-bold font-oswald text-white">
              {totalCalories}
            </span>
          </div>
        </div>

        <div className="flex gap-3 items-center justify-end py-4">
          <span className="text-[#8A92A0] text-[12px] font-normal ">
            Sort By
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortby(e.target.value)}
            className="select w-fit min-h-0 appearance-none bg-[#13161D] text-[12px font-normal] text-white"
          >
            <option disabled={true}>Pick a color</option>
            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories</option>
            <option value={"rating"}>Rating</option>
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
                (addTodayWorkouts.length > 0 ? (
                  addTodayWorkouts.map((workout) => {
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
                (savedWorkout.length > 0 ? (
                  savedWorkout.map((workout) => {
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
                      <button className="text-[12px] font-semibold text-black bg-[#C2F10D] px-6 py-3 rounded-2xl hover:text-[#E5E7EB] hover:bg-[#0F1115] hover:border hover:border-[#E5E7EB] hover:cursor-pointer">
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
