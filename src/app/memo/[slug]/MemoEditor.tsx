"use client";

import { Memo } from "@prisma/client";
import { useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

export async function MemoEditor(props: { memo: Memo }) {
  const ref = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="">
      <TextareaAutosize
        ref={ref}
        className="text-lg font-medium text-slate-600 p-6 w-full rounded-lg drop-shadow-lg backdrop-blur-lg bg-opacity-95 bg-white"
        minRows={5}
        defaultValue={props.memo.content ?? "Write a memo!"}
      />
    </div>
  );
}
