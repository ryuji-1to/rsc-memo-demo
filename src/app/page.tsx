import { Suspense } from "react";
import { MemoList } from "./_feature/components/MemoList";

export const revalidate = 0;

export default function Home() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      {/* @ts-ignore*/}
      <MemoList />
    </Suspense>
  );
}
