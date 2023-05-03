import { getWorkExperience } from "@/app/lib/api";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const result = await getWorkExperience();
    return NextResponse.json({
      status: 200,
      body: result,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      body: error.message,
    });
  }
};
