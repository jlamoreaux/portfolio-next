import { Subheading } from "@/app/lib/types";
import Navbar from "./components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  subheadings: Subheading[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* @ts-expect-error Async Server Component */}
      <Navbar />
      <div className="flex flex-col flex-grow">{children}</div>
    </div>
  );
}
