"use client";

import { Button } from "@/share/components/Button";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function Header() {
  const segment = useSelectedLayoutSegment();

  return (
    <header className="flex items-center relative">
      <Link href="/" className="absolute left-1 flex-[0.1] flex items-center">
        {segment !== null && <span className="text-2xl">←</span>}
      </Link>
      <h1 className="flex-1 text-4xl font-bold text-slate-700 leading-normal text-center">
        {segment === "new" ? "New Memo" : "My Memo"}
      </h1>
      {segment === null && (
        <Button
          buttonType="link"
          className="absolute right-1 bg-blue-500 rounded-2xl text-white"
          href="/new"
        >
          New
        </Button>
      )}
    </header>
  );
}
