"use client";

import { Memo } from "@prisma/client";
import TextareaAutosize from "react-textarea-autosize";
import { ToolBar } from "./ToolBar";
import { useEditor } from "./use-editor";

export function MemoEditor({ memo }: { memo?: Memo }) {
  const stuff = useEditor();

  return (
    <div className="flex space-x-4">
      <div className="space-y-4">
        <input
          ref={stuff.inputRef}
          type="text"
          className="outline-none w-full px-6 py-3 font-semibold text-[#252525] text-2xl rounded-lg bg-transparent"
          defaultValue={memo?.title ?? ""}
          placeholder="This is Title..."
        />
        <TextareaAutosize
          ref={stuff.textareaRef}
          className="outline-none flex-1 text-lg font-medium text-[#333333] p-6 w-full rounded-lg drop-shadow-lg backdrop-blur-lg bg-opacity-95 bg-white"
          defaultValue={memo?.content ?? ""}
          placeholder="Write a memo!"
          minRows={5}
        />
      </div>
      <nav>
        <ToolBar onSubmit={stuff.handleSubmit} />
      </nav>
    </div>
  );
}
