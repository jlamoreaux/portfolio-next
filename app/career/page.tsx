"use client";
import { useState, useEffect } from "react";
import { WorkExperience } from "../lib/types";
import PageHeading from "../components/PageHeading";
import Loader from "../components/Loader";
import Scrollbar from "../components/Scrollbar";

interface TimelinePanelProps {
  company: string;
  startDate: string;
  active: boolean;
  onClick: () => void;
}

const TimelinePanel = ({
  company,
  startDate,
  active,
  onClick,
}: TimelinePanelProps) => {
  return (
    <div
      className={`flex items-center cursor-pointer
       ${active ? "font-bold text-gray-800" : "text-gray-500"}`}
      onClick={onClick}
    >
      <div
        className={`h-4 w-4 rounded-full bg-gray-500 mr-4 transition duration-1000 ease-in-out ${
          active ? "" : "opacity-50"
        }`}
      ></div>
      <div>
        <div className="font-bold">{company}</div>
        <div className="text-sm">{startDate}</div>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  position: string;
  description: string;
  active: boolean;
}

const TimelineItem = ({ position, description, active }: TimelineItemProps) => {
  return (
    <div
      className={`py-4 ${active ? "block" : "hidden"}
    `}
    >
      <div className="font-bold">{position}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
};

const Experience = () => {
  const [experience, setExperience] = useState<WorkExperience[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchExperience = async () => {
      setLoading(true);
      const response = await fetch("/api/experience");
      const experience = await response.json();
      if (experience.status === 200) {
        const chronilogicalExperience = experience.body.sort(
          (a: WorkExperience, b: WorkExperience) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
        setExperience(chronilogicalExperience);
        setLoading(false);
      } else {
        setError(true);
      }
    };
    fetchExperience();
  }, []);

  const handlePanelClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col flex-grow container mx-auto px-4 py-8 h-full">
      <PageHeading>Work Experience</PageHeading>
      <div className="flex m-auto w-full h-full justify-center">
        {loading && <Loader />}
        {!loading && experience.length > 0 && (
          <div className="flex m-auto w-full h-full justify-center">
            <div className="mr-8">
              <div className="sticky top-0">
                {experience.map((item, index) => (
                  <TimelinePanel
                    key={index}
                    company={item.company}
                    startDate={item.startDate}
                    active={activeIndex === index}
                    onClick={() => handlePanelClick(index)}
                  />
                ))}
              </div>
            </div>
            <Scrollbar>
              {/* <div className="max-w-lg w-full h-52 overflow-y-auto"> */}
              {/* {experience.map((item, index) => (
                  <TimelineItem
                    key={index}
                    position={item.position}
                    description={item.description}
                    active={activeIndex === index}
                  />
                ))} */}
              Hello
              {/* </div> */}
            </Scrollbar>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
