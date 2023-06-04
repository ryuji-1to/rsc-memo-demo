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
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error("what?");
  }
  return res.json();
}

export async function updateMemo(
  id: number,
  body: { title: string; content?: string },
  option?: Option
) {
  const { delayMs = 1000 } = option || {};
  await sleep(delayMs);
  const res = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, ...body }),
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("what?");
  }
  return res.json();
}

export async function deleteMemo(id: number, option?: Option) {
  const { delayMs = 1000 } = option || {};
  await sleep(delayMs);
  const res = await fetch(URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) {
    throw new Error("what?");
  }
  return res.json();
}
