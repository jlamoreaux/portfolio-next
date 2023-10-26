import { FC } from "react";
import SocialLink from "./SocialLink";
import {
  BrandTwitter,
  BrandGithub,
  BrandLinkedin,
  Mail,
  Butterfly,
} from "tabler-icons-react";

interface FooterProps {
  siteTitle: string;
}

const Footer: FC<FooterProps> = ({ siteTitle }) => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>
          © {new Date().getFullYear()} {siteTitle}
        </p>
        <div className="flex items-center">
          <SocialLink
            platform="Twitter"
            Icon={BrandTwitter}
            link="https://twitter.com/jlmx_in_atx"
          />
          <SocialLink
            platform="GitHub"
            Icon={BrandGithub}
            link="https://github.com/jlamoreaux"
          />
          <SocialLink
            platform="LinkedIn"
            Icon={BrandLinkedin}
            link="https://www.linkedin.com/in/jlamoreaux/"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
