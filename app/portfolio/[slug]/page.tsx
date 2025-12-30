import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandGithub, Globe, ArrowLeft } from "tabler-icons-react";
import { getProject, getAllProjects } from "@/app/lib/api";
import { generateSanityImageUrl } from "@/app/lib/sanity";
import { PageContainer } from "@/app/components/PageContainer";
import { SITE_TITLE } from "@/site.config";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${SITE_TITLE}`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${SITE_TITLE}`,
      description: project.description,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageContainer>
      {/* Back button */}
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
        Back to Portfolio
      </Link>

      {/* Project header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </div>

      {/* Project image */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 border border-slate-200">
        <Image
          src={generateSanityImageUrl({
            imageId: project.coverImage.asset._ref,
            width: 1200,
            height: 675,
          })}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-4 mb-16">
        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            <Globe size={20} />
            View Live Project
          </a>
        )}
        {project.sourceCodeUrl && (
          <a
            href={project.sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border-2 border-slate-300 rounded-xl font-medium hover:border-primary-400 hover:text-primary-700 transition-all"
          >
            <BrandGithub size={20} />
            View Source Code
          </a>
        )}
      </div>

      {/* Related projects */}
      <div className="mt-20 pt-12 border-t border-slate-200">
        <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">
          More Projects
        </h2>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          View all projects →
        </Link>
      </div>
    </PageContainer>
  );
}
