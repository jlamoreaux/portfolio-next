"use client";
import { FC, useEffect, useState } from "react";
import { LandingPageData } from "@/app/lib/types";
import { generateTextFromBlocks } from "../TextBodyFromSanity";
import LinkButton from "../LinkButton";

const LandingPage: FC = () => {
  const [data, setData] = useState<LandingPageData>();
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [heading, setHeading] = useState<JSX.Element[]>([]);
  const [subText, setSubText] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetch("/api/home")
      .then((result) => result.json())
      .then((result) => {
        setData(result.body);
        let { body } = generateTextFromBlocks(result.body.welcomeText);
        setHeading(body);
        let { body: subText } = generateTextFromBlocks(
          result.body.welcomeSubtext
        );
        setSubText(subText);
        // add a delay to the heading animation
        setTimeout(() => {
          setIsHeadingVisible(true);
        }, 200);
      });
  }, []);

  let initialDelay = 0;

  function getClassByDelay(delay: number) {
    return {
      0: "delay-0",
      500: "delay-500",
      1000: "delay-1000",
    }[delay];
  }

  return (
    <section className="flex flex-col items-center justify-center flex-grow py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-center text-gray-900 mb-4">
          {heading.map((element, index) => {
            const elem = (
              <div
                key={index}
                className={`transition-opacity ${getClassByDelay(
                  initialDelay
                )} duration-1000 ease-in ${
                  isHeadingVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {element}
              </div>
            );
            initialDelay += 500;
            return elem;
          }, [])}
        </h2>
        <div className="w-full mb-16">
          <h3 className="mx-auto gradient opacity-25 rounded-t text-center text-l md:text-3xl w-full">
            {...subText}
          </h3>
        </div>
        <div className="flex justify-center w-full px-4 mb-8">
          {data?.callToActionLink?.length &&
            data.callToActionLink[0] &&
            data.callToActionLink.map((link) => (
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
