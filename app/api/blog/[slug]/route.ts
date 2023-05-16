import { getPost } from "@/app/lib/api";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const posts = await getPost(params.slug);
    return NextResponse.json({ body: posts });
  } catch (error) {
    return NextResponse.json(error);
  }
}
