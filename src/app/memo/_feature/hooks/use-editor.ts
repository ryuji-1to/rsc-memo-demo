import { createMemo, deleteMemo, updateMemo } from "@/api/client";
import { sleep } from "@/util/sleep";
import { Memo } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { toast } from "react-hot-toast";

type InputAttributes = (type?: JSX.IntrinsicElements["input"]["type"]) => {
  type: JSX.IntrinsicElements["input"]["type"];
  ref: React.RefObject<HTMLInputElement>;
  placeholder: string;
  defaultValue?: string;
};

type TextareaAttributes = (minRows?: number) => {
  ref: React.RefObject<HTMLTextAreaElement>;
  placeholder: string;
  minRows: number;
  defaultValue?: string;
};

type Return<T extends Memo | undefined> = T extends Memo
  ? {
      inputAttributes: InputAttributes;
      textareaAttributes: TextareaAttributes;
      handleEdit: () => Promise<void>;
      handleDelete: () => Promise<void>;
    }
  : T extends undefined
  ? {
      inputAttributes: InputAttributes;
      textareaAttributes: TextareaAttributes;
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

  const inputAttributes = (type = "text") => {
    const common = {
      type,
      ref: inputRef,
      placeholder: "This is title...",
    };
    return memo
      ? {
          ...common,
          defaultValue: memo.title,
        }
      : common;
  };

  const textareaAttributes = (minRows = 5) => {
    const common = {
      ref: textareaRef,
      placeholder: "Write a memo!",
      minRows,
    };
    return memo
      ? {
          ...common,
          defaultValue: memo.content ?? "",
        }
      : common;
  };

  if (memo) {
    const handleEdit = async () => {
      const title = inputRef.current?.value;
      const content = textareaRef.current?.value;
      if (!title) {
        return toast.error("Title is needed!!");
      }
      await toast.promise(updateMemo(memo.id, { title, content }), {
        loading: "Saving...",
        success: "Got it!",
        error: "Ohhh Error...",
      });
      await sleep(1000);
      // not good 😾
      router.replace(`/memo/${memo.id}`);
      router.refresh();
    };

    const handleDelete = async () => {
      await toast.promise(deleteMemo(memo.id), {
        loading: "Saving...",
        success: "Got it!",
        error: "Ohhh Error...",
      });
      await sleep(1000);
      // not good 😾
      router.replace(`/`);
      router.refresh();
    };

    return {
      handleEdit,
      handleDelete,
      inputAttributes,
      textareaAttributes,
    } as Return<T>;
  } else {
    const handleSubmit = async () => {
      const title = inputRef.current?.value;
      const content = textareaRef.current?.value;
      if (!title) {
        return toast.error("Title is needed!!");
      }
      await toast.promise(createMemo({ title, content }), {
        loading: "Saving...",
        success: "Got it!",
        error: "Ohhh Error...",
      });
      await sleep(1000);
      // not good 😾
      router.replace("/");
      router.refresh();
    };

    return {
      handleSubmit,
      inputAttributes,
      textareaAttributes,
    } as Return<T>;
  }
}
