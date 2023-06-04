import { createMemo } from "@/database/client";
import { sleep } from "@/util/sleep";
import { Memo } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import { MutableRefObject, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";

type Return<T extends Memo | undefined> = T extends Memo
  ? {
      inputRef: MutableRefObject<HTMLInputElement>;
      textareaRef: MutableRefObject<HTMLTextAreaElement>;
      handleEdit: () => Promise<void>;
      handleDelete: () => Promise<void>;
    }
  : T extends undefined
  ? {
      inputRef: MutableRefObject<HTMLInputElement>;
      textareaRef: MutableRefObject<HTMLTextAreaElement>;
      handleSubmit: () => Promise<void>;
    }
  : never;

export function useEditor<T extends Memo | undefined = undefined>(
  memo?: T
): Return<T> {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/new")) {
      inputRef.current?.focus();
    }
    // eslint-disable-next-line
  }, []);

  if (memo) {
    const handleEdit = async () => {
      console.log("edit");
    };
    const handleDelete = async () => {
      console.log("delete");
    };
    return {
      inputRef,
      textareaRef,
      handleEdit,
      handleDelete,
    } as Return<T>;
  } else {
    const handleSubmit = async () => {
      const title = inputRef.current?.value;
      const content = textareaRef.current?.value;
      if (!title) {
        return toast.error("Title is needed!!");
      }
      toast
        .promise(createMemo({ title, content }), {
          loading: "Saving...",
          success: "Got it!",
          error: "Ohhh Error...",
        })
        .then(async () => {
          await sleep(1000);
          router.replace("/");
        });
    };
    return { inputRef, textareaRef, handleSubmit } as Return<T>;
  }
}
