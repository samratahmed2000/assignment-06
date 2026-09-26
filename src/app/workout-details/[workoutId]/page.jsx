import AddToTodayButton from "@/components/button/AddToToday";
import SaveForLaterButton from "@/components/button/SaveForLater";
import Image from "next/image";
import React from "react";
import Loading from "./loading";

const getWorkouts = async () => {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`);
    return res.json();
  } catch (error) {
    throw new Error("Data not found");
  }
};

const WorkoutDetailsPage = async ({ params }) => {
  const { workoutId } = await params;

  const workouts = await getWorkouts();

  const workout = workouts?.find((w) => String(w.id) === String(workoutId));

  if (!workout) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-xl">
        <h2>Workout not found! Please check the ID.</h2>
      </div>
    );
  }

  return (
    <div className="flex gap-12 container mx-auto py-6 mt-8 mb-18">
      <div className="pt-2">
        <Image
          src={workout?.image}
          alt={workout?.name}
          width={590}
          height={770}
          className="rounded-2xl h-full w-fit"
        />
      </div>

      <div>
        <h2 className="font-oswald font-bold text-[36px] uppercase">
          {workout.name}
        </h2>
        <p className="text-[16px] text-[#9CA3AF] font-normal leading-6 my-3">
          {workout.description}
        </p>

        <div className="flex gap-2 items-center">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="bg-[#ccff00] text-black text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider"
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="bg-[#151922] rounded-2xl my-6">
          <div className="div-flex rounded-t-2xl">
            <p className="para">EQUIPMENT</p>
            <span className="para-span">{workout.equipment}</span>
          </div>

          <div className="div-flex">
            <p className="para">DIFFICULTY</p>
            <span className="para-span">{workout.difficulty}</span>
          </div>

          <div className="div-flex">
            <p className="para">SETS</p>
            <span className="para-span">{workout.sets}</span>
          </div>

          <div className="div-flex">
            <p className="para">REPS</p>
            <span className="para-span">{workout.reps}</span>
          </div>

          <div className="div-flex">
            <p className="para">DURATION</p>
            <span className="para-span">{workout.duration} min</span>
          </div>

          <div className="div-flex">
            <p className="para">CALORIES</p>
            <span className="para-span">{workout.caloriesBurned} kcal</span>
          </div>

          <div className="div-flex rounded-b-2xl">
            <p className="para">RATING</p>
            <span className="para-span">{workout.rating}</span>
          </div>
        </div>

        <div className="my-6">
          <span className="text-[16px] font-extrabold">INSTRUCTIONS</span>
          {workout.instructions.map((instructions, ind) => (
            <p
              key={instructions}
              className="text-[#D1D5DB] text-[14px] font-normal leading-8 tracking-wide"
            >
              {ind + 1}. {instructions}
            </p>
          ))}
        </div>

        <div className="flex gap-6 items-center">
          <AddToTodayButton workout={workout} />
          <SaveForLaterButton workout={workout} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
