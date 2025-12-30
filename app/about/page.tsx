import PageHeading from "../components/PageHeading";
import { PageContainer } from "../components/PageContainer";
import { getAboutMe } from "../lib/api";
import About from "../career/components/About";

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
