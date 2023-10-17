import Card from "../components/Card";
import { generateSanityImageUrl } from "../lib/sanity";
import PageHeading from "../components/PageHeading";
import { getAllPostHeadings } from "../lib/api";

const BlogList = async () => {
  const posts = await getAllPostHeadings();
  return (
    <div className="p-4">
      <PageHeading>Documentation</PageHeading>
      <div className="flex flex-wrap justify-center">
        {posts.length > 0 &&
          posts.map((post) => (
            <Card
              key={post.slug}
              title={post.title}
              description={post.description || ""}
              imageSrc={ post.mainImage ? generateSanityImageUrl({
                imageId: post.mainImage.asset._ref,
              }) : ""}
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
