import { WorkExperience } from "../lib/types";
import PageHeading from "../components/PageHeading";
import { PageContainer } from "../components/PageContainer";
import { getAboutMe, getWorkExperience } from "../lib/api";
import Timeline from "./components/Timeline";
import About from "./components/About";

const Experience = async () => {
  const experience: WorkExperience[] = await getWorkExperience();
  const AboutData = await getAboutMe();

  return (
    <PageContainer>
      <PageHeading>Who Am I?</PageHeading>
      <About
        title={AboutData?.title}
        aboutMeText={AboutData?.aboutMeText}
        image={AboutData?.image}
      />
      <h2 className="text-3xl font-bold text-center pb-4">My Career</h2>
      <Timeline experience={experience} />
    </PageContainer>
  );
};

export default Experience;
