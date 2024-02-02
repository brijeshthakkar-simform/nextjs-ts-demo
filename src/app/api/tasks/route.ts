import { NextResponse } from "next/server";

import prisma from "@/app/utils/connect";

export async function POST(req: Request) {
  try {
    const { title, description, date, completed } = await req.json();

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Please fill in all fields",
        status: 400,
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}

export async function GET() {
  try {
    const tasks = await prisma.task.findMany({});
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { isCompleted, id } = await req.json();

    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        isCompleted,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}
