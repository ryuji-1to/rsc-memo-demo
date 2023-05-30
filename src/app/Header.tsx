"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function Header() {
  const segment = useSelectedLayoutSegment();
  return (
    <header className="flex">
      {segment !== null && (
        <Link
          href="/"
          className="text-3xl flex-[0.1] flex items-center animate-bounce"
        >
          👈
        </Link>
      )}
      <h1 className="flex-1 text-4xl font-bold text-slate-700 leading-normal text-center">
        My Memo
      </h1>
      {segment !== null && <div className="flex-[0.1]" />}
    </header>
  );
}
