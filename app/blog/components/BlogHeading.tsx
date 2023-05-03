import React from "react";

type BlogHeadingProps = {
  children: React.ReactNode;
};

const BlogHeading: React.FC<BlogHeadingProps> = ({ children }) => {
  return <h1 className="text-4xl font-bold mb-8">{children}</h1>;
};

export default BlogHeading;
