import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "./LinkButton";

type CardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  link: string;
  linkText: string;
};

const Card: FC<CardProps> = ({
  title,
  imageSrc,
  imageAlt,
  description,
  link,
  linkText,
}) => {
  return (
    <div className="border border-gray-200 shadow-md rounded-md overflow-hidden">
      <Image
        className="w-full h-48 object-cover"
        src={imageSrc}
        alt={imageAlt}
        width={400}
        height={300}
      />
      <div className="p-4 flex flex-wrap justify-center">
        <h3 className="font-bold text-lg mb-2 w-full">{title}</h3>
        <p className="text-gray-700 mb-2">{description}</p>
        <LinkButton href={link} style="primary">
          {linkText}
        </LinkButton>
      </div>
    </div>
  );
};

export default Card;
