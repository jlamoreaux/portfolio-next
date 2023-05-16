import { Post, Subheading } from "@/app/lib/types";
import Navbar from "./components/Navbar";
import { getAllPostHeadings } from "../lib/api";
import { FlexDirection, PageContainer } from "../components/PageContainer";

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
  const groupedPosts = await getGroupedPosts();

  return (
    <PageContainer>
      <div className="flex flex-col-reverse md:flex-row grow h-full">
        <Navbar groupedPosts={groupedPosts} />
        <div className="flex flex-col flex-grow">{children}</div>
      </div>
    </PageContainer>
  );
}
