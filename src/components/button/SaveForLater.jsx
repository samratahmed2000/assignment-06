import Link from "next/link";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";

const SaveForLaterButton = () => {
  return (
    <Link href="/my-plan">
      <button className="text-[14px] text-[#E5E7EB] font-medium border border-[#374151] px-5 py-3 flex justify-between items-center gap-2 rounded-2xl">
        <FaRegBookmark /> Add to today&apos;s plan
      </button>
    </Link>
  );
};

export default SaveForLaterButton;
