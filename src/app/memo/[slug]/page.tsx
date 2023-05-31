import { fetchMemoById } from "@/database/server";
import { MemoEditor } from "./MemoEditor";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  let memoId: number = Number(params.slug);
  if (Number.isNaN(memoId)) {
    return <div>No memo...</div>;
  }

  const memo = await fetchMemoById(memoId);

  if (!memo) {
    return <div>No memo...</div>;
  }

  // @ts-ignore
  return <MemoEditor memo={memo} />;
}
