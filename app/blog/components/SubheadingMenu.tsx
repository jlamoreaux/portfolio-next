"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Subheading } from "@/app/lib/types";

interface Props {
  subheadings?: Subheading[];
  currentSubheading?: Subheading;
}

export const SubheadingMenu = ({ subheadings, currentSubheading }: Props) => {
  const path = usePathname();
  return (
    <div className="md:sticky top-20 w-full hidden md:block md:w-60 p-4">
      <h2 className="font-bold text-gray-500 uppercase tracking-wide mb-2">
        On this page
      </h2>
      <nav className="space-y-2">
        {subheadings?.map((heading) => (
          <Link
            href={`${path}#${heading.key}`}
            key={heading.key}
            className={`block text-sm ${
              currentSubheading?.key === heading.key
                ? "font-bold"
                : "font-medium"
            } hover:underline underline-offset-1`}
          >
            {heading.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};
