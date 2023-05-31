"use server";

import { sleep } from "@/util/sleep";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Option = {
  delayMs?: number;
};

export async function fetchAllMemo(option?: { delayMs?: number }) {
  const { delayMs = 0 } = option || {};
  try {
    await sleep(delayMs);
    const allMemo = await prisma.memo.findMany({
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
  const memo = await prisma.memo.findUnique({
    where: {
      id,
    },
  });
  return memo;
}

export async function createNewMemo() {}
