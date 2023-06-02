import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const db = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const postedData = await db.memo.create({
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return NextResponse.json(postedData);
}
