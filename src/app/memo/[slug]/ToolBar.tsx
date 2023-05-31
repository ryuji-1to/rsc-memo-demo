"use client";

import { Button } from "@/share/components/Button";
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
  return (
    <div className="sticky top-4 flex flex-col space-y-4">
      {isEdit || isNew ? (
        <Button
          buttonType="button"
          className="bg-sky-50 text-sky-600 border border-sky-500 rounded-3xl hover:bg-sky-100"
          onClick={onSubmit}
        >
          Save
        </Button>
      ) : (
        <Link
          href={`/memo/edit/${memoId}`}
          className="px-4 py-2 font-semibold drop-shadow-md bg-sky-50 text-sky-600 border border-sky-500 rounded-3xl hover:bg-sky-100 text-center"
        >
          Edit
        </Link>
      )}
      {!isNew && (
        <Button
          buttonType="button"
          className="bg-red-50 rounded-3xl border text-red-600 border-red-500 hover:bg-red-100"
          onClick={onDelete}
        >
          Delete
        </Button>
      )}
    </div>
  );
}
