import { WorkExperience } from "../lib/types";
import PageHeading from "../components/PageHeading";
import { PageContainer } from "../components/PageContainer";
import { getWorkExperience } from "../lib/api";
import InteractiveTimeline from "./components/InteractiveTimeline";

const Experience = async () => {
  const experience: WorkExperience[] = await getWorkExperience();

  return (
    <PageContainer>
      <PageHeading>Career</PageHeading>
      {experience && experience.length > 0 && (
        <>
          <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto mb-12">
            My professional journey through the years. Click on any role to explore what I accomplished and the impact I made.
          </p>
          <InteractiveTimeline experience={experience} />
        </>
      )}
    </PageContainer>
  );
};

export default Experience;
