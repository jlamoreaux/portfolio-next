"use client";
import { useState, ReactNode, FC } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import {
  META_DESCRIPTION,
  META_KEYWORDS,
  SITE_TITLE,
  SITE_SUBTITLE,
} from "@/site.config";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="keywords" content={META_KEYWORDS} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header
          siteName={SITE_TITLE}
          siteSubtitle={SITE_SUBTITLE}
          navLinks={[
            { href: "/blog", label: "Docs" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/career", label: "Career" },
          ]}
        />
        <main className="relative z-0 flex flex-col flex-grow max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-10 w-full">
          {children}
        </main>
        <Footer siteTitle={SITE_TITLE} />
      </div>
    </>
  );
};

export default Layout;
