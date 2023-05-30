import { Suspense } from "react";
import { MemoList } from "./MemoList";

export default function Home() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      {/* @ts-ignore*/}
      <MemoList />
    </Suspense>
  );
}
