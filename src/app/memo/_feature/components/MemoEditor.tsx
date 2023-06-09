"use client";

import { type Memo } from "@prisma/client";
import TextareaAutosize from "react-textarea-autosize";
import { ToolBar } from "./ToolBar";
import { useEditor } from "../hooks/use-editor";

export function MemoEditor({ memo }: { memo?: Memo }) {
  return memo ? <EditMemoEditor memo={memo} /> : <NewMemoEditor />;
}

const inputStyle =
  "outline-none w-full px-6 py-3 font-semibold text-[#252525] text-2xl rounded-lg bg-transparent";

const textareaStyle =
  "outline-none flex-1 text-lg font-medium text-[#333333] p-6 w-full rounded-lg drop-shadow-lg backdrop-blur-lg bg-opacity-95 bg-white";

function NewMemoEditor() {
  return (
    <EditorForm>
      {(stuff) => (
        <>
          <div className="space-y-4">
            <input className={inputStyle} {...stuff.inputAttributes()} />
            <TextareaAutosize
              className={textareaStyle}
              {...stuff.textareaAttributes()}
            />
          </div>
          <nav>
            <ToolBar onSubmit={stuff.handleSubmit} />
          </nav>
        </>
      )}
    </EditorForm>
  );
}

function EditMemoEditor({ memo }: { memo: Memo }) {
  return (
    <EditorForm memo={memo}>
      {(stuff) => (
        <>
          <div className="space-y-4">
            <input className={inputStyle} {...stuff.inputAttributes()} />
            <TextareaAutosize
              className={textareaStyle}
              {...stuff.textareaAttributes()}
            />
          </div>
          <nav>
            <ToolBar onEdit={stuff.handleEdit} onDelete={stuff.handleDelete} />
          </nav>
        </>
      )}
    </EditorForm>
  );
}

type EditorFormProps<T extends Memo | undefined = undefined> = {
  memo?: T;
  children: (stuff: ReturnType<typeof useEditor<T>>) => React.ReactNode;
} & Omit<JSX.IntrinsicElements["form"], "children">;

function EditorForm<T extends Memo | undefined = undefined>({
  className = "flex space-x-4",
  children,
  memo,
  ...props
}: EditorFormProps<T>) {
  const stuff = useEditor<T>(memo);
  return (
    <form {...props} className={className}>
      {children(stuff)}
    </form>
  );
}
