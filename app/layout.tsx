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
  },
  twitter: {
    creator: "@jlmx_in_atx",
    site: "@jlmx_in_atx",
    card: "summary_large_image",
  },
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
