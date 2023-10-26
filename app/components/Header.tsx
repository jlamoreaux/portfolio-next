import Link from "next/link";
import Image from "next/image";
import Navigation, { NavLink } from "./Navigation";
import { useState } from "react";

interface HeaderProps {
  siteName: string;
  siteSubtitle: string;
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({
  siteName,
  siteSubtitle,
  navLinks,
}) => {
  let isLogoHovered = false;
  const setIsLogoHovered = (value: boolean) => isLogoHovered = value;

  const handleLogoHover = () => {
    setIsLogoHovered(true);
  };

  const handleLogoLeave = () => {
    setIsLogoHovered(false);
  };

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto flex items-center justify-between p-5">
        <Link href="/" className="text-white text-2xl font-bold">
          <div
            className="flex items-center"
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoLeave}
          >
            <Image
              src="/images/logo-white.png"
              width="48"
              height="48"
              alt="Logo"
              className={`mr-4 ${isLogoHovered ? "animate-spin-y" : ""}`}
            />
            <div>
              <h1 className="mt-0">{siteName}</h1>
              <h2 className="text-xl font-normal mt-0">{siteSubtitle}</h2>
            </div>
          </div>
        </Link>

        <Navigation navLinks={navLinks} />
      </nav>
    </header>
  );
};

export default Header;
