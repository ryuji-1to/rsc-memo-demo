"use client";

import { usePathname } from "next/navigation";

export function ToolBar({
  onSubmit,
  onDelete,
  onEdit,
}: {
  onSubmit?: JSX.IntrinsicElements["button"]["onClick"];
  onDelete?: JSX.IntrinsicElements["button"]["onClick"];
  onEdit?: JSX.IntrinsicElements["button"]["onClick"];
}) {
  const pathname = usePathname();
  const isNew = pathname.includes("/new");
  const isEdit = pathname.includes("/edit");
  const style =
    "drop-shadow-md space-x-1 py-2 px-3 rounded-xl flex justify-center items-center font-semibold";

  return (
    <div className="sticky top-10 flex flex-col space-y-4 mt-16">
      {(isNew || isEdit) && (
        <button
          type="button"
          className={`bg-emerald-50 text-emerald-600 border border-emerald-500 hover:bg-emerald-100 ${style}`}
          onClick={isEdit ? onEdit : onSubmit}
        >
          Save
        </button>
      )}
      {!isNew && (
        <button
          type="button"
          className={`bg-red-50 border text-red-600 border-red-500 hover:bg-red-100 ${style}`}
          onClick={onDelete}
        >
          Delete
        </button>
      )}
    </div>
  );
}
