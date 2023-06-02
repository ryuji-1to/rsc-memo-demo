"use client";

import Link from "next/link";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

export function Header() {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();

  return (
    <header className="shadow-md py-2">
      <div className="flex items-center relative max-w-2xl mx-auto">
        <button
          onClick={() => router.back()}
          className="absolute left-4 flex items-center"
        >
          {segment !== null && <span className="text-2xl">←</span>}
        </button>
        <h1 className="flex-1 text-4xl font-bold text-slate-700 leading-normal text-center">
          {segment === "new" ? "New" : "My Memo"}
        </h1>
        {segment === null && (
          <Link
            href="/new"
            className="absolute right-4 bg-blue-500 rounded-lg drop-shadow-md text-white py-1.5 px-3 font-semibold"
          >
            New
          </Link>
        )}
      </div>
    </header>
  );
}
