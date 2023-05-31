"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function Header() {
  const segment = useSelectedLayoutSegment();

  return (
    <header className="shadow-md py-2">
      <div className="flex items-center relative max-w-2xl mx-auto">
        <Link href="/" className="absolute left-1 flex-[0.1] flex items-center">
          {segment !== null && <span className="text-2xl">←</span>}
        </Link>
        <h1 className="flex-1 text-4xl font-bold text-slate-700 leading-normal text-center">
          {segment === "new" ? "New Memo" : "My Memo"}
        </h1>
        {segment === null && (
          <Link
            href="/new"
            className="absolute right-1 bg-blue-500 rounded-xl text-white py-2 px-4 font-semibold"
          >
            New
          </Link>
        )}
      </div>
    </header>
  );
}
