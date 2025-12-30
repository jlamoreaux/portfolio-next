import { PageContainer } from "../components/PageContainer";

export default function Loading() {
  return (
    <PageContainer>
      {/* Page heading skeleton */}
      <div className="my-12 flex justify-center">
        <div className="h-12 w-48 bg-slate-200 rounded-lg animate-pulse" />
      </div>

      {/* Subtitle skeleton */}
      <div className="flex justify-center mb-12">
        <div className="h-6 w-96 bg-slate-200 rounded animate-pulse" />
      </div>

      {/* Timeline skeleton */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

          {/* Timeline items */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative mb-8">
              {/* Timeline dot */}
              <div className="absolute left-8 top-6 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-slate-300 animate-pulse" />
              </div>

              {/* Card skeleton */}
              <div className="ml-20">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 animate-pulse">
                  <div className="space-y-3">
                    <div className="h-6 bg-slate-200 rounded w-3/4" />
                    <div className="h-5 bg-slate-200 rounded w-1/2" />
                    <div className="h-4 bg-slate-200 rounded w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
