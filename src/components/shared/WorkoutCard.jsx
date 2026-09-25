import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFire, FaRegStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const WorkoutCard = ({ workout }) => {
  const {
    image,
    muscleGroups,
    name,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link href={`/workout-details/${workout.id}`}>
      <div className="flex flex-col w-full gap-6 rounded-2xl bg-[#15171D]">
        <div className="flex flex-col justify-center items-center relative aspect-3/2 w-full overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={name}
            width={420}
            height={180}
            className="object-cover"
          />
        </div>

        <div className="px-6 py-4">
          <div className="flex gap-2 items-center">
            {muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="bg-[#ccff00] text-black text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="font-oswald font-bold text-[18px] uppercase py-2 mt-2">
            {name}
          </h2>
          <p className="text-[#9CA3AF] text-[12px] font-normal">{equipment}</p>

          <div className="flex gap-6 text-[12px] text-[#9CA3AF] font-normal border-t border-[#222630] py-3 mt-5">
            <span className="flex justify-between items-center gap-2">
              <IoTimeOutline />
              {duration} min
            </span>
            <span className="flex justify-between items-center gap-2">
              <FaFire />
              {caloriesBurned} kcal
            </span>
            <span className="flex justify-between items-center gap-2">
              <FaRegStar />
              {rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
