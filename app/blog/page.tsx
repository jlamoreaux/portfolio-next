"use client";
import { FC } from "react";
import Card from "../components/Card";
import { useBlogContext } from "./context/blogsContext";
import { generateSanityImageUrl } from "../lib/sanity";
import PageHeading from "../components/PageHeading";
import Loader from "../components/Loader";

const BlogList: FC = () => {
  const { posts, loading, error } = useBlogContext();
  return (
    <div className="p-4">
      <PageHeading>Documentation</PageHeading>
      <div className="flex flex-wrap justify-center">
        {loading && <Loader />}
        {!loading && error && (
          <div className="text-red-500 text-center">{error}</div>
        )}
        {!loading &&
          posts.length > 0 &&
          posts.map((post) => (
            <Card
              key={post.slug}
              title={post.title}
              description={post.description || ""}
              imageSrc={generateSanityImageUrl({
                imageId: post.mainImage.asset._ref,
              })}
              imageAlt={post.title}
              linkText="Read More"
              link={`/blog/${post.slug}`}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
