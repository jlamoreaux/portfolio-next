import { FC } from "react";
import Card from "./Card";

type FeatureCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  link: string;
  linkText: string;
};

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  imageSrc,
  imageAlt,
  description,
  link,
  linkText,
}) => {
  return (
    <Card
      title={title}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      description={description}
      link={link}
      linkText={linkText}
    />
  );
};

export default FeatureCard;
