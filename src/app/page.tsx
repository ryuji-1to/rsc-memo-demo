import { Suspense } from "react";
import { MemoList } from "./MemoList";

export const revalidate = 0;

export default function Home() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      {/* @ts-ignore*/}
      <MemoList />
    </Suspense>
  );
}
