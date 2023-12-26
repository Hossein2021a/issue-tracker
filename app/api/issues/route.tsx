import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { SchemaIssu } from "../../SchemaIssu";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const body = await request.json();

  const validBody = SchemaIssu.safeParse(body);

  if (!validBody.success)
    return NextResponse.json(validBody.error.format(), { status: 404 });

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 200 });
}
