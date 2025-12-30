import { Metadata } from "next";
import PageHeading from "../components/PageHeading";
import { PageContainer } from "../components/PageContainer";
import { getAboutMe } from "../lib/api";
import About from "../career/components/About";
import { SITE_TITLE } from "@/site.config";

export const metadata: Metadata = {
  title: `About | ${SITE_TITLE}`,
  description: "Learn more about Jordan Lamoreaux - a Full Stack Web Developer passionate about building robust, scalable web applications.",
  openGraph: {
    title: `About | ${SITE_TITLE}`,
    description: "Learn more about Jordan Lamoreaux - a Full Stack Web Developer passionate about building robust, scalable web applications.",
    type: "profile",
  },
};

const AboutPage = async () => {
  const AboutData = await getAboutMe();

  return (
    <PageContainer>
      <PageHeading>About Me</PageHeading>
      <About
        title={AboutData?.title}
        aboutMeText={AboutData?.aboutMeText}
        image={AboutData?.image}
      />

      {/* Contact CTA */}
      <div className="mt-16 mb-8">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-center border border-primary-100">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4">
            Let&apos;s Work Together
          </h3>
          <p className="text-slate-600 mb-6">
            Interested in collaborating? I&apos;d love to hear about your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:jordan@jordanlamoreaux.com"
              className="px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-white text-primary-700 border-2 border-primary-200 rounded-xl font-medium hover:border-primary-400 hover:bg-primary-50 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
