import Link from "next/link";
import Image from "next/image";
import Navigation, { NavLink } from "./Navigation";

interface HeaderProps {
  siteName: string;
  siteSubtitle: string;
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({
  siteName,
  siteSubtitle,
  navLinks,
}) => {
  let isLogoHovered = false;
  const setIsLogoHovered = (value: boolean) => isLogoHovered = value;

  const handleLogoHover = () => {
    setIsLogoHovered(true);
  };

  const handleLogoLeave = () => {
    setIsLogoHovered(false);
  };

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4">
        <Link href="/" className="text-slate-900 text-2xl font-bold group">
          <div
            className="flex items-center"
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoLeave}
          >
            <div className="mr-4 p-2 rounded-xl bg-primary-600 shadow-sm group-hover:shadow-md transition-all duration-300">
              <Image
                src="/images/logo-white.png"
                width="48"
                height="48"
                alt="Logo"
                className={`${isLogoHovered ? "animate-spin-y" : ""}`}
              />
            </div>
            <div>
              <h1 className="mt-0 text-2xl font-display font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{siteName}</h1>
              <h2 className="text-sm font-medium text-slate-500 mt-0 group-hover:text-accent-600 transition-colors">{siteSubtitle}</h2>
            </div>
          </div>
        </Link>

        <Navigation navLinks={navLinks} />
      </nav>
    </header>
  );
};

export default Header;
