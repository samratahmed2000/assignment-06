import React from "react";
import WorkoutCard from "../shared/WorkoutCard";

const getWorkouts = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return res.json();
  } catch (error) {
    throw new Error("Data not found");
  }
};

const WorkoutLibrary = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="container mx-auto" id="workouts">
      <h2 className="font-oswald text-[30px] font-bold text-white">
        THE LIBRARY
      </h2>
      <p className="text-[14px] font-normal text-[#9CA3AF] mb-8">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-18">
        {workouts.map((workout) => {
          return <WorkoutCard key={workout.id} workout={workout} />;
        })}
      </div>
    </section>
  );
};

export default WorkoutLibrary;
