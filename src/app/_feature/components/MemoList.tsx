import { Children } from "react";
import { fetchAllMemo } from "@/api/server";
import { format } from "date-fns";
import Link from "next/link";

export async function MemoList() {
  const allMemo = await fetchAllMemo();

  if (allMemo.length === 0) {
    return <div>No memo...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg drop-shadow-sm">
      <List>
        {allMemo.map((memo) => (
          <Link key={memo.id} href={`/memo/${memo.id}`}>
            <section>
              <h2 className="text-xl font-semibold break-all text-slate-600 line-clamp-1">
                {memo.title}
              </h2>
              <small className="text-xs text-slate-500">
                last update :{" "}
                <span className="font-semibold">
                  {format(memo.updatedAt, "yyyy/MM/dd hh:mm")}
                </span>
              </small>
            </section>
          </Link>
        ))}
      </List>
    </div>
  );
}

function List(props: { children: React.ReactNode[] }) {
  return (
    <>
      {Children.map(props.children, (child, i) => {
        if (props.children.length - 1 === i) {
          return child;
        }
        return (
          <>
            {child}
            <hr className="my-4" />
          </>
        );
      })}
    </>
  );
}
