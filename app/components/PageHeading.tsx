import React, { FC } from "react";

type PageHeadingProps = {
  children: React.ReactNode;
};

const PageHeading: FC<PageHeadingProps> = ({ children }) => {
  return (
    <h2 className="my-8 text-4xl sm:text-5xl font-bold leading-tight text-center text-gray-800">
      {children}
    </h2>
  );
};

export default PageHeading;
