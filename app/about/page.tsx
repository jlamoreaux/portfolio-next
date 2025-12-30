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
    </PageContainer>
  );
};

export default AboutPage;
