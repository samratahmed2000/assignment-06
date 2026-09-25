import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-slate-100">
      <div
        className="absolute top-1/2 left-1/2 -z-10 h-100 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
        aria-hidden="true"
      />
      <div className="text-center max-w-xl z-10">
        <p className="text-base font-semibold uppercase">404 Error</p>
        <h1 className="mt-4 text-2xl text-red-600/90 font-bold tracking-tight sm:text-7xl">
          Page Not Found
        </h1>
        <p className="mt-6 text-lg text-slate-400">
          Oops! The page you are looking for doesn&apos;t exist or has been
          removed.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl  px-6 py-3 text-sm font-semibold text-black bg-[#C2F800] transition-all"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
