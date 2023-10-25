import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import dynamic from "next/dynamic";

// const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
//   ssr: false,
// });

interface TimelinePanelProps {
  active: boolean;
  date: string;
  onClick: () => void;
}

interface TimelineItemProps {
  company: string;
  startDate: string;
  position: string;
  description: string[];
}

export const TimelineDate = ({ date }: { date: string }) => {
  const year = date.split("-")[0];
  const convertedYear = parseInt(year);
  return <>
    <AnimatedNumbers animateToNumber={convertedYear} locale="en-US" />;
  </> 
};

export const TimelineItem = ({
  company,
  position,
  description,
}: TimelineItemProps) => {
  return (
    <div className="flex w-full items-center">
      <div
        className="p-4 w-full h-96 mx-8 border-2 border-gray-400 bg-gray-700 text-gray-100 
        rounded-md transition duration-1000 ease-in-out overflow-y-auto shadow-xl font-mono"
        style={{ transition: "opacity 0.5s" }}
      >
        <div className="font-bold text-2xl">{company}</div>
        <div>{position}</div>
        <div className="text-sm m-4">
          <ul>
            {description.map((desc, index) => (
              <li key={index} className="list-disc py-2">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const TimelinePanel = ({
  active,
  date,
  onClick,
}: TimelinePanelProps) => {
  return (
    <div
      className={
        "flex flex-col w-full md:flex-row relative items-center cursor-pointer font-bold text-gray-800 h-20"
      }
      onClick={onClick}
    >
      <div
        className={`h-4 w-4 rounded-full bg-gray-500 mr-4 mb-2 transition duration-1000 ease-in-out ${
          active ? "" : "opacity-50"
        }`}
      ></div>
      <div className="flex justify-center text-3xl font-mono w-full">
        {active && <TimelineDate date={date} />}
      </div>
    </div>
  );
};
