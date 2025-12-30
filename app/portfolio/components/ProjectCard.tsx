"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { generateSanityImageUrl } from "../../lib/sanity";
import { Project } from "../../lib/types";
import ProjectDetails from "./ProjectDetails";

const IMAGE_WIDTH = 540;
const IMAGE_HEIGHT = 300;

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 hover:border-primary-300 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ paddingBottom: "62.5%" }}
      >
        <Image
          src={generateSanityImageUrl({
            imageId: project.coverImage.asset._ref,
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
          })}
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-center object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <ProjectDetails
        title={project.title}
        description={project.description}
        sourceCodeUrl={project.sourceCodeUrl}
        isHovered={isHovered}
        slug={project.slug}
        liveDemoUrl={project.liveDemoUrl}
      />
    </div>
  );
};

export default ProjectCard;
