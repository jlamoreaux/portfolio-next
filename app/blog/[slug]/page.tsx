"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Code from "../../components/Code";
import { Post, PostBody, Subheading } from "@/app/lib/types";
import { generateSanityImageUrl } from "@/app/lib/sanity";
import { SubheadingMenu } from "../components/SubheadingMenu";
import { generateTextFromBlocks } from "@/app/components/TextBodyFromSanity";
import BlogHeading from "../components/BlogHeading";
import Loader from "@/app/components/Loader";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

const BlogPost: FC<BlogPostProps> = ({ params }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [body, setBody] = useState<JSX.Element[]>([]);
  const [subheadings, setSubheadings] = useState<
    {
      title: string;
      key: string;
    }[]
  >([]);
  const [currentSubheading, setCurrentSubheading] = useState<
    Subheading | undefined
  >(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/blog/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.body);
        const { subheadings: subs, body: postBody } = generateTextFromBlocks(
          data.body.body
        );
        if (postBody.length > 0) {
          setSubheadings(subs);
          setBody(postBody);
          setCurrentSubheading(subs[0]);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [params.slug]);

  return (
    <div className="flex justify-center h-full">
      {error && <p>{error}</p>}
      {post && (
        <>
          <article>
            {post.mainImage && (
              <Image
                src={generateSanityImageUrl({
                  imageId: post.mainImage.asset._ref,
                })}
                alt={post.title}
                className="w-full"
                width={600}
                height={200}
                style={{ maxHeight: 200, objectFit: "cover" }}
              />
            )}
            <div className="max-w-3xl mx-auto p-8">
              <BlogHeading>{post.title}</BlogHeading>
              <h4 className="italic">By {post.author?.name}</h4>
              <p className="text-sm mb-8">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <div className="post-body">{...body}</div>
            </div>
          </article>
          <SubheadingMenu
            key={"subheadings"}
            subheadings={subheadings}
            currentSubheading={currentSubheading}
          />
        </>
      )}
    </div>
  );
};

export default BlogPost;
