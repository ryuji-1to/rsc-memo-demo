"use client";

import { Button } from "@/share/components/Button";

export function ToolBar({ isNew = false }: { isNew?: boolean }) {
  return (
    <div className="sticky top-4 flex flex-col space-y-4">
      <Button
        buttonType="button"
        className="bg-sky-50 text-sky-600 border border-sky-500 rounded-3xl hover:bg-sky-100"
      >
        Save
      </Button>
      {!isNew && (
        <Button
          buttonType="button"
          className="bg-red-50 rounded-3xl border text-red-600 border-red-500 hover:bg-red-100"
        >
          Delete
        </Button>
      )}
    </div>
  );
}
