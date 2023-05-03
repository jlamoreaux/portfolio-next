import { getHomePageData } from "@/app/lib/api";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const landingPageData = await getHomePageData();
    return NextResponse.json({ body: landingPageData });
  } catch (error) {
    return NextResponse.json({ body: error });
  }
};
