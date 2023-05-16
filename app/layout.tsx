import Layout from "./components/Layout";
import "./globals.css";

export const metadata = {
  title: "Jordan Lamoreaux | Full Stack Developer",
  description: "Full Stack Developer based in Austin, TX",
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
      </body>
    </html>
  );
}
