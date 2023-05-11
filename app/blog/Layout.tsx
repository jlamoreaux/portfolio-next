import { Post, Subheading } from "@/app/lib/types";
import Navbar from "./components/Navbar";
import { getAllCategories, getAllPostHeadings } from "../lib/api";

interface LayoutProps {
  children: React.ReactNode;
  subheadings: Subheading[];
}

export type GroupedPosts = { slug: string; title: string; posts: Post[] };

const getGroupedPosts = async (): Promise<GroupedPosts[]> => {
  const postsList = await getAllPostHeadings();
  return Object.values(
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
};

export default async function Layout({ children }: LayoutProps) {
  // const categoriesData = getAllCategories();
  const groupedPosts = await getGroupedPosts();

  // const [categories, groupedPosts] = await Promise.all([
  //   categoriesData,
  //   groupedPostsData,
  // ]);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      <Navbar groupedPosts={groupedPosts} />
      <div className="flex flex-col flex-grow">{children}</div>
    </div>
  );
}
