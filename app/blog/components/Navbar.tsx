"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { GroupedPosts } from "../layout";
import { useState } from "react";

const Navbar = ({ groupedPosts }: { groupedPosts: GroupedPosts[]; }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>();
  const params = useParams();

  const handleCategoryClick = (slug: string) => {
    console.log({ expandedCategory, slug })
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
              <div>
                <ul className="pl-4 mt-2">
                  {groupedPosts
                    .filter((selectedCategory) =>
                      selectedCategory.posts.filter(
                        (post) => post.slug === category.slug
                      )
                    )
                    .map((category, i) =>
                      category.posts.map((post) => (
                        <li
                          key={post.slug || category.title + i}
                          className="mb-1"
                        >
                          <Link
                            href={`/blog/${post.slug}`}
                            className={`text-gray-600 hover:text-black text-sm leading-none
                            ${params.slug === post.slug ? "font-bold" : ""}
                            `}
                          >
                            {post.title}
                          </Link>
                        </li>
                      ))
                    )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
