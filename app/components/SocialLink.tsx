import { FC } from "react";
import { Icon as IconType } from "tabler-icons-react";

interface SocialLinkProps {
  platform: string;
  Icon: IconType;
  link: string;
}

const SocialLink: FC<SocialLinkProps> = ({ platform, Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-500 hover:text-primary-600 transition-all duration-200 hover:scale-110 inline-block"
    >
      <span className="sr-only">{platform}</span>
      <Icon className="w-6 h-6" />
    </a>
  );
};

export default SocialLink;
