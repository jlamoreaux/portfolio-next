import ProjectCard from "./components/ProjectCard";
import PageHeading from "../components/PageHeading";
import GridContainer from "../components/GridContainer";
import { PageContainer } from "../components/PageContainer";
import { getAllProjects } from "../lib/api";

const Portfolio = async () => {
  const projects = await getAllProjects();

  return (
    <PageContainer>
      <PageHeading>Portfolio</PageHeading>
      <GridContainer>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default Portfolio;
