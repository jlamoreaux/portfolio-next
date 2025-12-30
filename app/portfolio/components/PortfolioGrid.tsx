"use client";
import { useState } from "react";
import { Project } from "@/app/lib/types";
import InteractiveProjectCard from "./InteractiveProjectCard";

interface PortfolioGridProps {
  projects: Project[];
}

const PortfolioGrid = ({ projects }: PortfolioGridProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCardClick = (slug: string) => {
    setExpandedId(expandedId === slug ? null : slug);
  };

  return (
    <div className="w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          // Create a bento-style layout with some cards taking more space
          const isWide = index % 5 === 0;
          const isTall = index % 7 === 0;

          return (
            <InteractiveProjectCard
              key={project.slug}
              project={project}
              isExpanded={expandedId === project.slug}
              onToggle={() => handleCardClick(project.slug)}
              className={`
                ${isWide ? "md:col-span-2" : ""}
                ${isTall ? "md:row-span-2" : ""}
              `}
              delay={index * 0.05}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioGrid;
