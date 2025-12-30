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
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} {siteTitle}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
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
      </div>
    </footer>
  );
};

export default Footer;
