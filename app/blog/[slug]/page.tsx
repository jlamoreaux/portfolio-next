import Image from "next/image";
import { generateSanityImageUrl } from "@/app/lib/sanity";
import { getPost } from "@/app/lib/api";
import { generateTextFromBlocks } from "@/app/components/TextBodyFromSanity";
import { SubheadingMenu } from "../components/SubheadingMenu";
import BlogHeading from "../components/BlogHeading";
import { Metadata, ResolvingMetadata } from "next";

interface BlogPostProps {
  params: {
    slug: string;
  };
}
export async function generateMetadata(
  { params }: BlogPostProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const post = await getPost(params.slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || [];

  const imageUrl = `/api/og?title=${encodeURIComponent(
    post.title
  )}&author=${encodeURIComponent(post.author?.name)}&date=${
    post.publishedAt
  }&imageUrl=${encodeURIComponent(
    generateSanityImageUrl({ imageId: post.mainImage.asset._ref })
  )}`;

  return {
    title: `${(await parent).title?.absolute} | ${post.title}`,
    authors: [post.author],
    openGraph: {
      images: [imageUrl, ...previousImages],
    },
  };
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const post = await getPost(params.slug);
  const { subheadings, body } = generateTextFromBlocks(post.body);
  const imageUrl = generateSanityImageUrl({
    imageId: post.mainImage.asset._ref,
  });

  return (
    <div className="flex flex-row justify-center h-full">
      <article className="flex flex-col items-center">
        <Image
          src={imageUrl}
          alt={post.title}
          className="w-screen md:w-full"
          width={600}
          height={200}
          style={{ maxHeight: 200, maxWidth: "100vw", objectFit: "cover" }}
        />
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
