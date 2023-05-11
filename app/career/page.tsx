import { WorkExperience } from "../lib/types";
import PageHeading from "../components/PageHeading";
import Scrollbar from "../components/Scrollbar";
import { PageContainer } from "../components/PageContainer";
import { TimelineItem, TimelinePanel } from "./components/Panel";
import { getWorkExperience } from "../lib/api";

const Experience = async () => {
  const experience: WorkExperience[] = await getWorkExperience();

  return (
    <PageContainer>
      <PageHeading>Work Experience</PageHeading>
      <div className="flex m-auto w-full h-full justify-center">
        <div className="flex m-auto w-full h-full justify-center">
          <div className="mr-8">
            <div className="sticky top-0">
              {experience.map((item, index) => (
                <TimelinePanel
                  key={index}
                  company={item.company}
                  startDate={item.startDate}
                  active={true}
                />
              ))}
            </div>
          </div>
          {/* <Scrollbar>
            <div className="max-w-lg w-full h-52 overflow-y-auto">
              {experience.map((item, index) => (
                <TimelineItem
                  key={index}
                  position={item.position}
                  description={item.description}
                  active={true}
                />
              ))}
              Hello
            </div>
          </Scrollbar> */}
        </div>
      </div>
    </PageContainer>
  );
};

export default Experience;
