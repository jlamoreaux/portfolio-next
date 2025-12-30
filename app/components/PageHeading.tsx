import React, { FC } from "react";

type PageHeadingProps = {
  children: React.ReactNode;
};

const PageHeading: FC<PageHeadingProps> = ({ children }) => {
  return (
    <h2 className="my-12 text-4xl sm:text-6xl font-display font-bold leading-tight text-center text-slate-900 tracking-tight">
      {children}
    </h2>
  );
};

export default PageHeading;
