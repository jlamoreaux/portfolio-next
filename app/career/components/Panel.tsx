import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

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
  {/* @ts-expect-error Server Component */} 
  return <AnimatedNumbers animateToNumber={convertedYear} locale="en-US" />;
};

export const TimelineItem = ({
  company,
  position,
  description,
}: TimelineItemProps) => {
  return (
    <div className="flex w-full items-center">
      <div
        className="p-6 w-full h-96 mx-8 border border-slate-300 bg-white
        rounded-2xl transition-all duration-500 ease-in-out overflow-y-auto shadow-lg hover:shadow-xl"
        style={{ transition: "opacity 0.5s" }}
      >
        <div className="font-display font-bold text-3xl text-slate-900 mb-2">{company}</div>
        <div className="font-medium text-lg text-primary-600 mb-4">{position}</div>
        <div className="text-base">
          <ul className="space-y-3">
            {description.map((desc, index) => (
              <li key={index} className="list-disc ml-5 text-slate-700 leading-relaxed">
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
        "flex flex-col w-full md:flex-row relative items-center cursor-pointer font-bold h-20"
      }
      onClick={onClick}
    >
      <div
        className={`h-5 w-5 rounded-full mr-4 mb-2 transition-all duration-300 ease-in-out ring-4 ${
          active
            ? "bg-primary-600 ring-primary-200 scale-110"
            : "bg-slate-400 ring-slate-200 opacity-60 hover:opacity-80"
        }`}
      ></div>
      <div className="flex justify-center text-3xl font-display text-slate-900 w-full">
        {active && <TimelineDate date={date} />}
      </div>
    </div>
  );
};
