import { generateTextFromBlocks } from "./components/TextBodyFromSanity";
import LinkButton from "./components/LinkButton";
import { getHomePageData } from "@/app/lib/api";

const LandingPage = async () => {
  const homePageData = await getHomePageData();
  const { body: welcomeText } = generateTextFromBlocks(
    homePageData.welcomeText
  );
  const { body: welcomeSubtext } = generateTextFromBlocks(
    homePageData.welcomeSubtext
  );

  function getAnimationByIndex(index: number) {
    return {
      0: "animate-fade-in-0",
      1: "animate-fade-in-1",
      2: "animate-fade-in-2",
    }[index];
  }

  return (
    <section className="flex flex-col items-center justify-center flex-grow py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-center text-gray-900 md:mb-4">
          {welcomeText.map((element, index) => {
            const elem = (
              <div key={index} className={getAnimationByIndex(index)}>
                {element}
              </div>
            );
            return elem;
          })}
        </h2>
        <div className="w-full mb-16">
          <h3 className="mx-auto gradient opacity-25 rounded-t text-center text-l md:text-3xl w-full">
            {...welcomeSubtext}
          </h3>
        </div>
        <div className="flex justify-center w-full px-4 mb-8">
          {homePageData.callToActionLink.map((link) => (
            <LinkButton href={link.url} key={link._key} style={link.style}>
              {link.text}
            </LinkButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
