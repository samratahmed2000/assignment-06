// import React from "react";

// const loading = () => {
//   return (
//     <div>
//       <h2 className="text-white">Loading...</h2>
//     </div>
//   );
// };

// export default loading;

import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-slate-100">
      <div
        className="absolute top-1/2 left-1/2 -z-10 h-100 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2F800] opacity-10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="text-center max-w-xl z-10 flex flex-col items-center justify-center">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C2F800]"></div>
          <div className="absolute rounded-full h-16 w-16 border border-[#C2F800]/20 animate-ping opacity-25"></div>
        </div>

        <p className="mt-8 text-base font-semibold uppercase tracking-wider text-[#C2F800]">
          Please Wait
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-6xl text-slate-100 animate-pulse">
          Loading Content...
        </h1>

        <p className="mt-4 text-sm text-slate-400 max-w-xs">
          We are fetching the data for you. This will only take a moment.
        </p>
      </div>
    </div>
  );
};

export default loading;
