import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/cars -> listar todos
export async function GET() {
  const cars = await prisma.car.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(cars);
}

// POST /api/cars -> crear nuevo auto
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const car = await prisma.car.create({ data: body });
    return NextResponse.json(car, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al publicar auto" }, { status: 500 });
  }
}
