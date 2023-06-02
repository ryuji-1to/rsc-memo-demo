import { sleep } from "@/util/sleep";

const URL = "http://localhost:3000/api/memo";

type Option = {
  delayMs?: number;
};

export async function createMemo(
  body: { title: string; content?: string },
  option?: Option
) {
  const { delayMs = 1000 } = option || {};
  await sleep(delayMs);
  const postedData = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-cache",
  });
  return postedData;
}

export async function updateMemo(
  id: number,
  body: { title: string; content?: string }
) {}

export async function deleteMemo(id: number) {}
