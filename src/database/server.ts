"use server";

import { sleep } from "@/util/sleep";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

type Option = {
  delayMs?: number;
};

export async function fetchAllMemo(option?: Option) {
  const { delayMs = 0 } = option || {};
  try {
    await sleep(delayMs);
    const allMemo = await db.memo.findMany({
      orderBy: [
        {
          updatedAt: "desc",
        },
      ],
    });
    return allMemo;
  } catch {
    return [];
  }
}

export async function fetchMemoById(id: number, option?: Option) {
  const { delayMs = 0 } = option || {};
  await sleep(delayMs);
  const memo = await db.memo.findUnique({
    where: {
      id,
    },
  });
  return memo;
}

export async function deleteMemoOnServer(formData: FormData) {}
