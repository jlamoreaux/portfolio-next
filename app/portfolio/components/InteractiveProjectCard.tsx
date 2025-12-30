"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandGithub, Globe, X } from "tabler-icons-react";
import { generateSanityImageUrl } from "@/app/lib/sanity";
import { Project } from "@/app/lib/types";

const IMAGE_WIDTH = 540;
const IMAGE_HEIGHT = 300;

interface InteractiveProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
  delay?: number;
}

const InteractiveProjectCard = ({
  project,
  isExpanded,
  onToggle,
  className = "",
  delay = 0,
}: InteractiveProjectCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isExpanded) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative group
        ${className}
      `}
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}s both`,
      }}
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div
        className={`
          relative bg-white border border-slate-200 rounded-2xl overflow-hidden
          transition-all duration-500 ease-out
          ${
            isExpanded
              ? "shadow-2xl scale-105 z-50"
              : "shadow-md hover:shadow-xl cursor-pointer"
          }
        `}
        style={{
          transform: isExpanded
            ? "scale(1.02)"
            : `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "all 0.3s ease-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={!isExpanded ? onToggle : undefined}
      >
        {/* Image Section */}
        <div
          className={`relative w-full overflow-hidden transition-all duration-500 ${
            isExpanded ? "h-64" : "h-48"
          }`}
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
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isExpanded ? "scale-100" : "group-hover:scale-110"
            }`}
          />
          {/* Overlay gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent transition-opacity duration-300 ${
              isExpanded ? "opacity-50" : "opacity-0 group-hover:opacity-100"
            }`}
          />

          {/* Close button when expanded */}
          {isExpanded && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-slate-100 transition-colors z-10"
            >
              <X size={20} className="text-slate-700" />
            </button>
          )}
        </div>

        {/* Content Section */}
        <div className={`p-6 transition-all duration-500 ${isExpanded ? "pb-8" : ""}`}>
          <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
            {project.title}
          </h3>
          <p
            className={`text-slate-600 leading-relaxed transition-all duration-500 ${
              isExpanded ? "line-clamp-none mb-6" : "line-clamp-2"
            }`}
          >
            {project.description}
          </p>

          {/* Links - always visible when expanded, hidden when collapsed */}
          <div
            className={`flex items-center gap-4 transition-all duration-500 ${
              isExpanded
                ? "opacity-100 translate-y-0 mt-4"
                : "opacity-0 translate-y-4 h-0 overflow-hidden"
            }`}
          >
            {project.liveDemoUrl && (
              <Link
                href={project.liveDemoUrl}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Globe size={18} />
                View Live
              </Link>
            )}
            {project.sourceCodeUrl && (
              <Link
                href={project.sourceCodeUrl}
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-primary-400 hover:text-primary-700 transition-colors text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <BrandGithub size={18} />
                Source Code
              </Link>
            )}
          </div>

          {/* Expand hint when not expanded */}
          {!isExpanded && (
            <div className="mt-4 text-sm text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Click to learn more →
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveProjectCard;
