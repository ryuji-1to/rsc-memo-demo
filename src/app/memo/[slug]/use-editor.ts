import { createMemo } from "@/database/client";
import { sleep } from "@/util/sleep";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";

export function useEditor() {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname.includes("/new")) {
      inputRef.current?.focus();
    }
    // eslint-disable-next-line
  }, []);

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
  return { inputRef, textareaRef, handleSubmit };
}
