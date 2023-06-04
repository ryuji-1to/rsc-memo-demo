"use client";

import Link from "next/link";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

export function Header() {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header className="py-2 shadow-md">
      <div className="relative flex items-center max-w-2xl mx-auto">
        {segment !== null && (
          <button
            onClick={handleBack}
            className="absolute flex items-center left-4"
          >
            <span className="text-2xl">←</span>
          </button>
        )}
        <h1 className="flex-1 text-4xl font-bold leading-normal text-center text-slate-700">
          <Link href="/">{segment === "new" ? "New" : "My Memo"}</Link>
        </h1>
        {segment === null && (
          <Link
            href="/memo/new"
            className="absolute right-4 bg-blue-500 rounded-lg drop-shadow-md text-white py-1.5 px-3 font-semibold"
          >
            New
          </Link>
        )}
      </div>
    </header>
  );
}
