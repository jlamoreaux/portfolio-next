import { PageContainer } from "../components/PageContainer";

export default function Loading() {
  return (
    <PageContainer>
      {/* Page heading skeleton */}
      <div className="my-12 flex justify-center">
        <div className="h-12 w-64 bg-slate-200 rounded-lg animate-pulse" />
      </div>

      {/* Subtitle skeleton */}
      <div className="flex justify-center mb-8">
        <div className="h-6 w-96 bg-slate-200 rounded animate-pulse" />
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md animate-pulse">
            {/* Image skeleton */}
            <div className="h-48 bg-slate-200" />

            {/* Content skeleton */}
            <div className="p-6 space-y-3">
              <div className="h-6 bg-slate-200 rounded w-3/4" />
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-5/6" />
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
