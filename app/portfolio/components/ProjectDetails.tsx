import { FC } from "react";
import Link from "next/link";
import { BrandGithub, Globe } from "tabler-icons-react";

interface Props {
  title: string;
  description: string;
  sourceCodeUrl: string;
  isHovered: boolean;
  slug: string;
  liveDemoUrl?: string;
}

const ProjectDetails: FC<Props> = ({
  title,
  description,
  sourceCodeUrl,
  isHovered,
  slug,
  liveDemoUrl,
}) => {
  return (
    <div
      className={`absolute bottom-0 left-0 p-6 w-full h-full flex-auto flex flex-col flex-end justify-end bg-gradient-to-b from-transparent from-5% to-white to-80% transform transition-transform duration-300 ${
        isHovered ? "md:translate-y-0" : "md:translate-y-12"
      }`}
    >
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-base text-gray-700 mb-4">{description}</p>
      </div>
      <div
        className={`flex items-center space-x-4 transition-opacity duration-300 sm:opacity-100 ${
          isHovered ? "lg:opacity-100" : "lg:opacity-0"
        }`}
      >
        {liveDemoUrl && (
          <Link
            href={liveDemoUrl}
            className="text-base font-medium text-gray-500 hover:text-gray-900 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe
              style={{
                display: "inline-block",
              }}
            />{" "}
            View Project
          </Link>
        )}
        <Link
          href={sourceCodeUrl}
          className="text-base font-medium text-gray-500 hover:text-gray-900 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandGithub
            style={{
              display: "inline-block",
            }}
          />{" "}
          Source Code
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
