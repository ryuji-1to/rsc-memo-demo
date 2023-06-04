import { fetchMemoById } from "@/api/server";
import { MemoPreview } from "../_feature/components/MemoPreview";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  let memoId = Number.parseInt(params.slug);
  if (Number.isNaN(memoId)) {
    return <div>No memo...</div>;
  }

  const memo = await fetchMemoById(memoId);
  if (!memo) {
    return <div>No memo...</div>;
  }

  return <MemoPreview memo={memo} />;
}
