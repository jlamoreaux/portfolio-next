import PageHeading from "../components/PageHeading";
import { PageContainer } from "../components/PageContainer";
import { getAllProjects } from "../lib/api";
import PortfolioGrid from "./components/PortfolioGrid";

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
