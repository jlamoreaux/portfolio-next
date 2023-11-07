import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const GET = (req: NextRequest) => {
  const { searchParams, host, protocol } = new URL(req.url);
  const title = searchParams.get("title") || "No post title";
  const author = searchParams.get("author") || "Anonymous";
  const date = new Date(searchParams.get("date") || new Date());
  const imageUrl = searchParams.get("imageUrl") || "";
  const cover = `${protocol}//${host}/_next/image?url=${encodeURIComponent(
    imageUrl || "/images/cover.jpg"
  )}&w=1200&q=75`;
  return new ImageResponse(
    (
      <div tw="flex w-full h-full flex-col justify-end bg-slate-200 items-stretch">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt={title}
          width={1200}
          height={600}
          tw="flex-1 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div tw="flex flex-col bg-gray-800 text-gray-200 p-8">
          <div tw="text-5xl font-extrabold mb-4">{title}</div>
          <div tw="text-2xl">{author}</div>
          <div tw="text-xl">
            {date?.toLocaleDateString("en-US", { dateStyle: "long" })}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 600 }
  );
};
