import LinkButton from "./components/LinkButton";
import { getHomePageData } from "@/app/lib/api";
import { PortableText } from "@portabletext/react";

const LandingPage = async () => {
  const homePageData = await getHomePageData();
  if (!homePageData) return null;

  const welcomeText =
    <PortableText value={homePageData.welcomeText} />
  const welcomeSubtext = <PortableText value={homePageData.welcomeSubtext} />

  return (
    <section className="relative flex flex-col items-center justify-center flex-grow py-12 md:py-20 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-100" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight text-center text-slate-900 mb-6 animate-fade-in">
            {welcomeText}
          </h2>
          <div className="w-full mb-12 animate-fade-in-delay-1">
            <h3 className="mx-auto text-center text-xl md:text-2xl font-medium text-slate-600 max-w-2xl leading-relaxed">
              {welcomeSubtext}
            </h3>
          </div>
          <div className="flex flex-wrap justify-center w-full px-4 mb-8 gap-4 animate-fade-in-delay-2">
            {homePageData.callToActionLink.map((link) => (
              <LinkButton href={link.url} key={link._key} style={link.style}>
                {link.text}
              </LinkButton>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 opacity-30" />
    </section>
  );
};

export default LandingPage;
