import { Memo } from "@prisma/client";
import Link from "next/link";

const style = "drop-shadow-md py-1.5 rounded-lg font-semibold w-[72px]";

export function MemoPreview({ memo }: { memo: Memo }) {
  return (
    <div className="space-y-4 ">
      <div className="ml-auto flex justify-end space-x-2">
        <Link
          href={`/memo/edit/${memo.id}`}
          className={`block text-center bg-sky-50 text-sky-600 border border-sky-500 hover:bg-sky-100 ${style}`}
        >
          Edit
        </Link>
        <button
          className={`bg-red-50 border text-red-600 border-red-500 hover:bg-red-100 ${style}`}
        >
          Delete
        </button>
      </div>
      <section className="drop-shadow-md bg-white p-6 rounded-lg min-h-[50vh]">
        <h2 className="text-3xl font-semibold text-[#252525]">{memo.title}</h2>
        <hr className="my-4" />
        <article>
          <p className="whitespace-pre-wrap text-lg text-[#333333]">
            {memo.content}
          </p>
        </article>
      </section>
    </div>
  );
}
