import { Metadata } from "next";
import PageHeading from "../components/PageHeading";
import { PageContainer } from "../components/PageContainer";
import { getAllProjects } from "../lib/api";
import PortfolioGrid from "./components/PortfolioGrid";
import { SITE_TITLE } from "@/site.config";

export const metadata: Metadata = {
  title: `Portfolio | ${SITE_TITLE}`,
  description: "Explore my portfolio of web development projects, showcasing modern applications built with React, Next.js, TypeScript, and more.",
  openGraph: {
    title: `Portfolio | ${SITE_TITLE}`,
    description: "Explore my portfolio of web development projects, showcasing modern applications built with React, Next.js, TypeScript, and more.",
    type: "website",
  },
};

const Portfolio = async () => {
  const projects = await getAllProjects();

  return (
    <PageContainer>
      <div className="mb-8">
        <PageHeading>Portfolio</PageHeading>
        <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto">
          A collection of projects showcasing modern web development, creative problem-solving, and innovative design.
        </p>
      </div>
      <PortfolioGrid projects={projects} />
    </PageContainer>
  );
};

export default Portfolio;
