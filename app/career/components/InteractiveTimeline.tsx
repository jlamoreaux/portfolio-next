"use client";
import { useState } from "react";
import { WorkExperience } from "@/app/lib/types";

interface InteractiveTimelineProps {
  experience: WorkExperience[];
}

const InteractiveTimeline = ({ experience }: InteractiveTimelineProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Sort experiences by start date (most recent first)
  const sortedExperience = [...experience].sort((a, b) => {
    const aDate = new Date(a.startDate);
    const bDate = new Date(b.startDate);
    return bDate.getTime() - aDate.getTime();
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
      return `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    } else if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'year' : 'years'}`;
    } else {
      return `${years} ${years === 1 ? 'year' : 'years'}, ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    }
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

        {sortedExperience.map((exp, index) => {
          const isExpanded = expandedIndex === index;
          const isCurrent = !exp.endDate;

          return (
            <div
              key={index}
              className="relative mb-8 last:mb-0"
              style={{
                animation: `fadeInLeft 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <style jsx>{`
                @keyframes fadeInLeft {
                  from {
                    opacity: 0;
                    transform: translateX(-20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
              `}</style>

              {/* Timeline dot */}
              <div className="absolute left-8 top-6 -translate-x-1/2 z-10">
                <div
                  className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                    isExpanded
                      ? "bg-primary-600 border-primary-200 scale-125"
                      : isCurrent
                      ? "bg-accent-500 border-accent-200 animate-pulse"
                      : "bg-white border-slate-300 hover:border-primary-300"
                  }`}
                />
              </div>

              {/* Content card */}
              <div className="ml-20">
                <button
                  onClick={() => toggleExpand(index)}
                  className={`w-full text-left bg-white border rounded-2xl transition-all duration-300 ${
                    isExpanded
                      ? "border-primary-300 shadow-lg"
                      : "border-slate-200 shadow-md hover:shadow-lg hover:border-slate-300"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-display font-bold text-slate-900">
                            {exp.title}
                          </h3>
                          {isCurrent && (
                            <span className="px-2 py-1 text-xs font-medium bg-accent-100 text-accent-700 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-primary-600 font-medium mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                          <span>
                            {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span>{calculateDuration(exp.startDate, exp.endDate)}</span>
                        </div>
                      </div>

                      {/* Expand/collapse indicator */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          className="w-4 h-4 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Expandable content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? "max-h-[1000px] mt-6" : "max-h-0"
                      }`}
                    >
                      <div className="border-t border-slate-200 pt-6">
                        <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                          Key Responsibilities & Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.description.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3"
                              style={{
                                animation: isExpanded
                                  ? `fadeIn 0.3s ease-out ${idx * 0.05}s both`
                                  : "none",
                              }}
                            >
                              <style jsx>{`
                                @keyframes fadeIn {
                                  from {
                                    opacity: 0;
                                    transform: translateY(5px);
                                  }
                                  to {
                                    opacity: 1;
                                    transform: translateY(0);
                                  }
                                }
                              `}</style>
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 mt-2" />
                              <p className="text-slate-700 leading-relaxed flex-1">
                                {item}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveTimeline;
