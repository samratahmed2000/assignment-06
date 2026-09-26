import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";
import BrowseWorkout from "../button/BrowseWorkout";

const Banner = () => {
  return (
    <header className="container mx-auto">
      <div className="flex justify-between min-h-80 my-12 p-12 items-center rounded-2xl bg-[#222630]">
        <div>
          <span className="text-[#C2F800] text-[11px] font-bold">
            WORKOUT LIBRARY
          </span>
          <h1 className="font-oswald text-[60px] my-4 font-extrabold leading-none text-white">
            TRAIN WITH INTENT. LOG <br />
            EVERY SET.
          </h1>
          <p className="text-[16px] font-normal my-6 text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br /> into today&apos;s plan, and watch the week&apos;s work add
            up.
          </p>

          <BrowseWorkout />
        </div>

        <div>
          <Image src={banner} alt="banner-image" />
        </div>
      </div>
    </header>
  );
};

export default Banner;
