"use client";

import { usePathname } from "next/navigation";
import { useTransition } from "react";

type Props = {
  onSubmit?: JSX.IntrinsicElements["button"]["onClick"];
  onDelete?: JSX.IntrinsicElements["button"]["onClick"];
  onEdit?: JSX.IntrinsicElements["button"]["onClick"];
  disabled?: JSX.IntrinsicElements["button"]["disabled"];
};

export function ToolBar({ onSubmit, onDelete, onEdit }: Props) {
  const pathname = usePathname();
  const isNew = pathname.includes("/new");
  const isEdit = pathname.includes("/edit");
  const buttonStyle =
    "drop-shadow-md space-x-1 py-2 px-3 rounded-xl flex justify-center items-center font-semibold";
  const disableStyle =
    "disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-400";

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    startTransition(() => (isEdit ? onEdit?.(e) : onSubmit?.(e)));
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    startTransition(() => onDelete?.(e));
  };

  return (
    <div className="sticky flex flex-col mt-16 space-y-4 top-10">
      {(isNew || isEdit) && (
        <button
          type="button"
          className={`bg-emerald-50 text-emerald-600 border border-emerald-500 hover:bg-emerald-100 ${disableStyle} ${buttonStyle}`}
          onClick={handleSubmit}
          disabled={isPending}
        >
          Save
        </button>
      )}
      {!isNew && (
        <button
          type="button"
          className={`bg-red-50 border text-red-600 border-red-500 hover:bg-red-100 ${disableStyle} ${buttonStyle}`}
          onClick={handleDelete}
          disabled={isPending}
        >
          Delete
        </button>
      )}
    </div>
  );
}
