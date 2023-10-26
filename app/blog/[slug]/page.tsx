import Image from "next/image";
import { generateSanityImageUrl } from "@/app/lib/sanity";
import { getPost } from "@/app/lib/api";
import { generateSubheadings } from "@/app/components/Subheadings";
import { SubheadingMenu } from "../components/SubheadingMenu";
import BlogHeading from "../components/BlogHeading";
import { Metadata, ResolvingMetadata } from "next";
import SanityText from "@/app/components/SanityText";

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
  // const previousImages = (await parent)?.openGraph?.images || [];

  const imageUrl = `/api/og?title=${encodeURIComponent(
    post.title
  )}&author=${encodeURIComponent(post.author?.name)}&date=${
    post.publishedAt
  }&imageUrl=${encodeURIComponent( post.mainImage ?
    generateSanityImageUrl({ imageId: post.mainImage.asset._ref }) :
    ""
  )}`;

  return {
    title: `${(await parent).title?.absolute} | ${post.title}`,
    authors: [post.author],
    openGraph: {
      images: [imageUrl],
    },
  };
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const post = await getPost(params.slug);
  const subheadings = generateSubheadings(post.body);
  const imageUrl = post.mainImage ? generateSanityImageUrl({
    imageId: post.mainImage.asset._ref,
  }): "";

  return (
    <div className="flex flex-row justify-center h-full">
      <article className="flex flex-col items-center w-fit max-w-full">
        <Image
          src={imageUrl}
          alt={post.title}
          className="w-screen md:w-full"
          width={600}
          height={200}
          style={{ maxHeight: 200, maxWidth: "100vw", objectFit: "cover" }}
        />
        <div className="max-w-3xl w-full mx-auto p-8">
          <BlogHeading>{post.title}</BlogHeading>
          <h4 className="italic">By {post.author?.name}</h4>
          <p className="text-sm mb-8">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <div className="post-body">
            <SanityText value={post.body} />
          </div>
        </div>
      </article>
      <SubheadingMenu
        subheadings={subheadings}
        currentSubheading={{ title: "Top", key: "top" }}
      />
    </div>
  );
};

export default BlogPost;
