interface TimelinePanelProps {
  company: string;
  startDate: string;
  active: boolean;
  // onClick: () => void;
}

interface TimelineItemProps {
  position: string;
  description: string;
  active: boolean;
}

export const TimelineItem = ({
  position,
  description,
  active,
}: TimelineItemProps) => {
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

export const TimelinePanel = ({
  company,
  startDate,
  active,
}: // onClick,
TimelinePanelProps) => {
  return (
    <div
      className={`flex items-center cursor-pointer
       ${active ? "font-bold text-gray-800" : "text-gray-500"}`}
      // onClick={onClick}
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
