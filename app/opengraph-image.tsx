import { SITE_TITLE } from "@/site.config";
import { ImageResponse } from "next/server";
import Image from "next/image";

export const alt = SITE_TITLE;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const runtime = "edge";

export default async function og() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <Image
          alt={SITE_TITLE}
          src={`/_next/image?url=${encodeURIComponent(
            "/images/logo-black.png"
          )}&w=1200&q=75`}
          width={600}
          height={600}
        />
        {SITE_TITLE}
      </div>
    ),
    {
      ...size,
    }
  );
}
