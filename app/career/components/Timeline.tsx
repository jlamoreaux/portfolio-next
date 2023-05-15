"use client";
import React, { useState } from "react";
import { TimelinePanel, TimelineItem } from "./Panel";
import { WorkExperience } from "@/app/lib/types";
import { ArrowDown, ArrowUp } from "tabler-icons-react";

const Timeline = ({ experience }: { experience: WorkExperience[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePanelClick = (index: number) => {
    if (index < 0 || index >= experience.length) return;
    return setActiveIndex(index);
  };

  // sort experience by date
  const sortedExperience = experience.sort((a, b) => {
    const aDate = new Date(a.startDate);
    const bDate = new Date(b.startDate);
    return bDate.getTime() - aDate.getTime();
  });

  return (
    <div className="flex flex-col mt-48 w-full h-full justify-center">
      <div className="flex flex-row relative justify-center items-stretch">
        <div className="flex flex-col grow justify-around">
          {/* up arrow to decrement activeIndex */}
          <div
            className={`${
              activeIndex <= 0 ? "opacity-50" : "cursor-pointer"
            } flex flex-row justify-center items-center`}
          >
            <ArrowUp
              className="transition duration-1000 ease-in-out"
              onClick={() => handlePanelClick(activeIndex - 1)}
            />
          </div>
          {experience.map((experience, index) => (
            <TimelinePanel
              key={index}
              active={index === activeIndex}
              date={experience.startDate}
              onClick={() => handlePanelClick(index)}
            />
          ))}
          <div
            className={`${
              activeIndex >= 2 ? "opacity-50" : "cursor-pointer"
            } flex flex-row justify-center items-center`}
          >
            <ArrowDown
              className="transform transition duration-1000 ease-in-out"
              onClick={() => handlePanelClick(activeIndex + 1)}
            />
          </div>
        </div>
        <TimelineItem
          company={sortedExperience[activeIndex].company}
          startDate={sortedExperience[activeIndex].startDate}
          position={sortedExperience[activeIndex].title}
          description={sortedExperience[activeIndex].description}
        />
      </div>
    </div>
  );
};

export default Timeline;
