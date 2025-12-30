import Link from "next/link";
import { PageContainer } from "./components/PageContainer";

export default function NotFound() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-8xl md:text-9xl font-display font-bold text-slate-300 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
          >
            Go Home
          </Link>
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-white text-primary-700 border-2 border-primary-200 rounded-xl font-medium hover:border-primary-400 hover:bg-primary-50 transition-all"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
