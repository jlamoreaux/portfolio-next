"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { GroupedPosts } from "../layout";

const Navbar = ({ groupedPosts }: { groupedPosts: GroupedPosts[]; }) => {
  const params = useParams();
  const [expandedCategory, setExpandedCategory] = useState<string | null>();

  const handleCategoryClick = (slug: string) => {
    if (expandedCategory === slug) {
      setExpandedCategory(null);
      return;
    }
    setExpandedCategory(slug);
    return;
  };

  const categories = groupedPosts.map((group) => ({
    slug: group.slug,
    title: group.title,
  }));

  return (
    <nav className="flex flex-col items-start justify-between py-8 sm:border-r-2 border-gray-200 w-60">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Categories</h2>
        {categories.map((category) => (
          <div
            key={category.slug}
            className="mb-2 cursor-pointer text-lg"
            onClick={() => handleCategoryClick(category.slug)}
          >
            {category?.title}
            {expandedCategory === category.slug && (
              <ul style={{ listStyle: "none" }} className="ml-4">
                {groupedPosts
                  .find((group) => group.slug === category.slug)
                  ?.posts.map((post) => (
                    <li key={post.slug}
                      style={{
                        marginLeft: "0.5rem",
                        marginBottom: "0.25rem",
                        textIndent: "-0.5rem",
                      }}
                    >
                      <Link href={`/blog/${post.slug}`} className={`text-gray-600 hover:text-black text-sm ${post.slug === params.slug ? "font-bold" : "font-normal"}`}>
                          {post.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
