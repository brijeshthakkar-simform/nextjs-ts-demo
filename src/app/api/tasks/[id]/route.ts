import { NextResponse } from "next/server";

import prisma from "@/app/utils/connect";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;

    const task = await prisma.task.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}
