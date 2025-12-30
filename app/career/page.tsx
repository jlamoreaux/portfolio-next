import { WorkExperience } from "../lib/types";
import PageHeading from "../components/PageHeading";
import { PageContainer } from "../components/PageContainer";
import { getAboutMe, getWorkExperience } from "../lib/api";
import InteractiveTimeline from "./components/InteractiveTimeline";
import About from "./components/About";

const Experience = async () => {
  const experience: WorkExperience[] = await getWorkExperience();
  const AboutData = await getAboutMe();

  console.log("Work Experience count:", experience?.length || 0);
  console.log("Work Experience data:", experience);

  return (
    <PageContainer>
      <PageHeading>Who Am I?</PageHeading>
      <About
        title={AboutData?.title}
        aboutMeText={AboutData?.aboutMeText}
        image={AboutData?.image}
      />
      {experience && experience.length > 0 ? (
        <>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-slate-900 mb-4">
            My Career Journey
          </h2>
          <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto mb-8">
            Click on any role to explore what I accomplished and the impact I made.
          </p>
          <InteractiveTimeline experience={experience} />
        </>
      ) : (
        <div className="text-center text-slate-600 py-8">
          <p>No work experience entries found in Sanity CMS.</p>
          <p className="text-sm mt-2">Add workExperience documents to see your career timeline.</p>
        </div>
      )}
    </PageContainer>
  );
};

export default Experience;
