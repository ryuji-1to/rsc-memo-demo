"use client";

import { Button } from "@/share/components/Button";

export function ToolBar({ isNew = false }: { isNew?: boolean }) {
  return (
    <div className="sticky top-4 flex flex-col space-y-4">
      <Button buttonType="button" className="bg-sky-500 rounded-3xl text-white">
        Save
      </Button>
      {!isNew && (
        <Button
          buttonType="button"
          className="bg-red-500 rounded-3xl text-white"
        >
          Delete
        </Button>
      )}
    </div>
  );
}
