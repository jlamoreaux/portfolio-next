import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useBlogContext } from "../context/blogsContext";
import { Post } from "@/app/lib/types";

const Navbar: React.FC = () => {
  const params = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const { posts: postsList, loading } = useBlogContext();

  const groupedPosts: { slug: string; title: string; posts: Post[] }[] =
    postsList &&
    Object.values(
      postsList.reduce((result: Record<string, any>, post) => {
        const { slug, title, author, publishedAt, categories } = post;
        const categorySlug = categories[0]?.slug;

        if (!result[categorySlug]) {
          result[categorySlug] = {
            slug: categorySlug,
            title: categories[0]?.title,
            posts: [],
          };
        }

        result[categorySlug].posts.push({ slug, title, author, publishedAt });

        return result;
      }, {})
    );

  const handleCategoryClick = (categorySlug: string) => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      {!loading && (
        <nav className="flex flex-col items-start justify-between py-8 sm:border-r-2 border-gray-200">
          <div className="p-4">
            <h2 className="text-2xl font-bold">Categories</h2>
            <ul className="mt-4">
              {groupedPosts?.map((category) => (
                <li
                  key={category?.slug}
                  className="mb-2 cursor-pointer"
                  onClick={() => handleCategoryClick(category?.slug)}
                >
                  <span className="text-lg">{category?.title}</span>
                  {isExpanded && (
                    <ul className="pl-4 mt-2">
                      {groupedPosts &&
                        groupedPosts
                          .filter((selectedCategory) =>
                            selectedCategory.posts.filter(
                              (post) => post.slug === category.slug
                            )
                          )
                          .map((category, i) =>
                            category.posts.map((post) => (
                              <li key={post.slug || i} className="mb-1">
                                <Link
                                  href={`/blog/${post.slug}`}
                                  className={`text-gray-700 hover:text-gray-900 ${
                                    params.slug === post.slug ? "font-bold" : ""
                                  }`}
                                >
                                  {post.title}
                                </Link>
                              </li>
                            ))
                          )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
