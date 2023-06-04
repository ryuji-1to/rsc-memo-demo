import { Suspense } from "react";
import { MemoList } from "./_feature/components/MemoList";

export default function Home() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      {/* @ts-ignore*/}
      <MemoList />
    </Suspense>
  );
}
