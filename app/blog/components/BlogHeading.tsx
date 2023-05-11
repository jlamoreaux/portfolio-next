import { FC, ReactNode } from "react";

type BlogHeadingProps = {
  children: ReactNode;
};

const BlogHeading: FC<BlogHeadingProps> = ({ children }) => {
  return <h1 className="text-4xl font-bold mb-8">{children}</h1>;
};

export default BlogHeading;
