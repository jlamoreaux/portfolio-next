import { WorkExperience } from "../lib/types";
import PageHeading from "../components/PageHeading";
import { PageContainer } from "../components/PageContainer";
import { getWorkExperience } from "../lib/api";
import Timeline from "./components/Timeline";

const Experience = async () => {
  const experience: WorkExperience[] = await getWorkExperience();

  return (
    <PageContainer>
      <PageHeading>Work Experience</PageHeading>
      <Timeline experience={experience} />
    </PageContainer>
  );
};

export default Experience;
