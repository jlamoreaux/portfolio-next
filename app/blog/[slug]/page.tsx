import Image from "next/image";
import { generateSanityImageUrl } from "@/app/lib/sanity";
import { getPost } from "@/app/lib/api";
import { generateTextFromBlocks } from "@/app/components/TextBodyFromSanity";
import { SubheadingMenu } from "../components/SubheadingMenu";
import BlogHeading from "../components/BlogHeading";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const post = await getPost(params.slug);
  const { subheadings, body } = generateTextFromBlocks(post.body);

  return (
    <div className="flex justify-center h-full">
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
        currentSubheading={{ title: "Top", key: "top" }}
      />
    </div>
  );
};

export default BlogPost;
