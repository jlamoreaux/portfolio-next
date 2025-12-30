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
    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden m-2 w-full transition-all duration-300 hover:shadow-xl hover:border-primary-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <Image
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-wrap justify-center">
        <h3 className="font-display font-bold text-xl mb-3 w-full text-slate-900 group-hover:text-primary-700 transition-colors">{title}</h3>
        <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
        <LinkButton href={link} style="primary">
          {linkText}
        </LinkButton>
      </div>
    </div>
  );
};

export default Card;
