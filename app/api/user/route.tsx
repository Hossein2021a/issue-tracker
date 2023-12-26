import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const getAllData = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(getAllData);
}
