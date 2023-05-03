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
      className={`mx-4 w-fit sm:mx-10 my-4 text-sm sm:text-lg flex items-center justify-center py-2 px-4 rounded border hover:border-gray-800 transition duration-300 ease-in-out
                ${
                  style === "primary"
                    ? "bg-gray-800 hover:bg-white text-gray-800 text-white hover:text-gray-800"
                    : "bg-transparent text-gray-800 border-gray-200"
                }`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
