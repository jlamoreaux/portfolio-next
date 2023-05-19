import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout";
import "./globals.css";

const title = "Jordan Lamoreaux";
const description = "Full Stack Developer based in Austin, TX";

export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://jlmx.dev",
    title,
    description,
    images: [
      {
        url: "https://jlmx.dev/images/logo-black.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    creator: "@jlmx_in_atx",
    site: "@jlmx_in_atx",
    card: "summary_large_image",
    title,
    description,
  },
  keywords: [
    "Jordan Lamoreaux",
    "Jordan",
    "Lamoreaux",
    "jlmx",
    "jlmx.dev",
    "jlmx_in_atx",
    "Full Stack Developer",
    "Austin, TX",
    "Developers in Austin",
    "Developers in Austin, TX",
    "Developers in Austin, Texas",
    "Developers in Austin Texas",
    "Hexle",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
