"use client";

import { Memo } from "@prisma/client";
import { useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { ToolBar } from "./ToolBar";

export function MemoEditor({
  isNew = false,
  memo,
}: {
  isNew?: boolean;
  memo?: Memo;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (isNew) {
      inputRef.current?.focus();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex space-x-4">
      <div className="space-y-4">
        <input
          ref={inputRef}
          type="text"
          className="outline-none w-full px-6 py-3 font-semibold text-[#252525] text-2xl rounded-lg bg-transparent"
          defaultValue={memo?.title || ""}
          placeholder="This is Title"
        />
        <TextareaAutosize
          ref={textareaRef}
          className="outline-none flex-1 text-lg font-medium text-[#252525] p-6 w-full rounded-lg drop-shadow-lg backdrop-blur-lg bg-opacity-95 bg-white"
          minRows={5}
          defaultValue={memo?.content || "Write a memo!"}
        />
      </div>
      <nav>
        <ToolBar isNew={isNew} />
      </nav>
    </div>
  );
}
