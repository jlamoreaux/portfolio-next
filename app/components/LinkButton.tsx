import Link, { LinkProps } from "next/link";
import React, { FC } from "react";

type LinkButtonProps = {
  _key?: string;
  href: string;
  style: "primary" | "secondary";
  children?: React.ReactNode;
  props?: LinkProps;
};

const LinkButton: FC<LinkButtonProps> = ({
  _key,
  href,
  style,
  props,
  children,
}) => {
  return (
    <Link
      {...props}
      href={href}
      key={_key}
      className={`mx-4 w-fit sm:mx-10 my-4 text-sm sm:text-lg font-medium flex items-center justify-center py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg
                ${
                  style === "primary"
                    ? "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-md"
                    : "bg-white text-primary-700 border-2 border-primary-200 hover:border-primary-400 hover:bg-primary-50"
                }`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
