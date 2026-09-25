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
    <section className="container mx-auto">
      <h2 className="font-oswald text-[30px] font-bold">THE LIBRARY</h2>
      <p className="text-[14px] font-normal text-[#9CA3AF]">
        Twelve lifts covering every major muscle group.
      </p>

      {workouts.map((workout) => {
        return <WorkoutCard key={workout.id} workout={workout} />;
      })}
    </section>
  );
};

export default WorkoutLibrary;
