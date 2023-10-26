import SanityText from "@/app/components/SanityText";
import { generateSanityImageUrl } from "@/app/lib/sanity";
import { PostBody, PostBodyImage } from "@/app/lib/types";
import Image from "next/image";

type AboutProps = {
  title: string;
  aboutMeText: PostBody[];
  image: PostBodyImage;
};

function About({ title, aboutMeText, image }: AboutProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-4 text-justify">
      {image && (
        <Image
          src={generateSanityImageUrl({ imageId: image.asset._ref })}
          alt="about me"
          width={200}
          height={200}
        />
      )}
      <div className="py-4"><SanityText value={aboutMeText} /></div>
    </div>
  );
}

export default About;
