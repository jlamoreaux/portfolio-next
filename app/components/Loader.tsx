import Image from "next/image";
import React, { FC } from "react";

type LoaderProps = {
  theme?: "light" | "dark";
  size?: "small" | "medium" | "large";
};

const Loader: FC<LoaderProps> = ({ theme, size }) => {
  const sizes = {
    small: 48,
    medium: 120,
    large: 240,
  };
  return (
    <Image
      src={
        theme === "dark" ? "/images/logo-white.png" : "/images/logo-black.png"
      }
      alt="loading"
      width={size ? sizes[size] : sizes.medium}
      height={size ? sizes[size] : sizes.medium}
      className="animate-spin-y infinite"
    />
  );
};

export default Loader;
