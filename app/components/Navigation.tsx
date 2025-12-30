"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "tabler-icons-react";

export type NavLink = {
  label: string;
  href: string;
};

type NavigationProps = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log({ mobileMenuOpen });
    setMobileMenuOpen(!mobileMenuOpen);
    console.log("state changed", { mobileMenuOpen });
  };

  return (
    <nav>
      <div className="flex items-center">
        <div className="hidden md:block">
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-primary-600 hover:bg-slate-100 transition-all duration-200"
            aria-label="Main menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <Menu
              className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
            />
            <svg
              className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 hidden"
        } md:hidden bg-white border-t border-slate-200 shadow-lg`}
      >
        <div className="bg-white left-0 px-4 py-3 z-50 absolute w-full top-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
