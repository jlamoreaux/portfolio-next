"use client";
import { FC, useEffect, useState } from "react";
import { Project } from "../lib/types";
import ProjectCard from "./components/ProjectCard";
import PageHeading from "../components/PageHeading";
import Loader from "../components/Loader";
import GridContainer from "../components/GridContainer";

const Portfolio: FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      fetch("/api/portfolio/all")
        .then((res) => res.json())
        .then((data) => {
          setProjects(data.body);
          setLoading(false);
        });
    } catch (error: any) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  }, []);

  return (
    <article className="w-full p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <PageHeading>Portfolio</PageHeading>
      {loading && (
        <div className="m-auto flex h-full justify-center">
          <Loader />
        </div>
      )}
      {!loading && projects.length > 0 && (
        <GridContainer>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </GridContainer>
      )}
    </article>
  );
};

export default Portfolio;
