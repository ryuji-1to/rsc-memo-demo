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

export async function PUT(request: Request) {
  const body = await request.json();
  const updatedData = await db.memo.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return NextResponse.json(updatedData);
}

export async function DELETE(request: Request) {
  const body = await request.json();
  try {
    const deletedData = await db.memo.delete({
      where: {
        id: body.id,
      },
    });
    return NextResponse.json(deletedData);
  } catch (e) {
    throw new Error("wat?");
  }
}
