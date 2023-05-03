"use client";

import React, { createContext, useState } from "react";
import { Subheading } from "@/app/lib/types";
import { BlogContextProvider } from "./context/blogsContext";
import Navbar from "./components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  subheadings: Subheading[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <BlogContextProvider>
      <div className="flex flex-col sm:flex-row min-h-screen">
        <Navbar />
        <div className="flex flex-col flex-grow">{children}</div>
      </div>
    </BlogContextProvider>
  );
}
