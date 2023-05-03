import { getAllProjects } from "@/app/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await getAllProjects();
    return NextResponse.json({ body: posts });
  } catch (error) {
    return NextResponse.json(error);
  }
}
