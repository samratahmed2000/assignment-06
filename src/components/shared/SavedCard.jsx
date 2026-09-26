import React from "react";
import ViewDetailsButton from "../button/ViewDetails";
import RemovedButton from "../button/RemovedButton";
import Image from "next/image";
import { FaFire, FaRegStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const SavedCard = ({ workout }) => {
  const { image, name, equipment, duration, caloriesBurned, rating } = workout;

  return (
    <section>
      <div className="flex justify-between items-center bg-[#232732] my-3 rounded-2xl py-3 px-6">
        <div className="flex gap-4">
          <div className="w-40">
            <Image
              src={image}
              alt={name}
              width={140}
              height={60}
              className="rounded-2xl py-2 object-cover"
            />
          </div>

          <div className="py-4 my-6 leading-5">
            <h2 className="font-oswald font-bold text-[16px] uppercase mb-1 text-white">
              {name}
            </h2>
            <p className="text-[#9CA3AF] mb-2 text-[12px] font-normal">
              {equipment}
            </p>

            <div className="flex gap-6 text-[12px] text-[#9CA3AF] font-normal border-t border-[#222630]">
              <span className="flex justify-between items-center gap-2">
                <IoTimeOutline className="text-[#CCFF00] font-extrabold text-[12px]" />
                {duration} min
              </span>
              <span className="flex justify-between items-center gap-2">
                <FaFire className="text-[#CCFF00] font-extrabold text-[12px]" />
                {caloriesBurned} kcal
              </span>
              <span className="flex justify-between items-center gap-2">
                <FaRegStar className="text-[#CCFF00] font-extrabold text-[12px]" />
                {rating}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <ViewDetailsButton workout={workout} />
          <RemovedButton workout={workout} type="saved"/>
        </div>
      </div>
    </section>
  );
};

export default SavedCard;
