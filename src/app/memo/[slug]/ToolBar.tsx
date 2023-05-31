"use client";

import { Button } from "@/share/components/Button";
import { CheckIcon, TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";

// TODO: onEdit,onSubmit,onDeleteの出し分け
type Props = {};

export function ToolBar({
  isNew = false,
  isEdit = false,
  onSubmit,
  onDelete,
  memoId,
}: {
  isNew?: boolean;
  isEdit?: boolean;
  memoId: number;
  onSubmit?: JSX.IntrinsicElements["button"]["onClick"];
  onDelete?: JSX.IntrinsicElements["button"]["onClick"];
}) {
  const style = "w-fit h-fit p-2.5 rounded-full";

  return (
    <div className="sticky top-10 flex flex-col space-y-4 mt-16">
      {isEdit || isNew ? (
        <button
          className={`bg-sky-50 text-sky-600 border border-sky-500 hover:bg-sky-100 ${style}`}
          onClick={onSubmit}
        >
          <CheckIcon width="28" height="28" />
        </button>
      ) : (
        <Link
          href={`/memo/edit/${memoId}`}
          className="p-4 font-semibold drop-shadow-md bg-sky-50 text-sky-600 border border-sky-500 rounded-3xl hover:bg-sky-100 text-center"
        >
          Edit
        </Link>
      )}
      {!isNew && (
        <button
          className={`bg-red-50 border text-red-600 border-red-500 hover:bg-red-100 ${style}`}
          onClick={onDelete}
        >
          <TrashIcon width="28" height="28" />
        </button>
      )}
    </div>
  );
}
