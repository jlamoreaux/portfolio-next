import { PageContainer } from "../components/PageContainer";

export default function Loading() {
  return (
    <PageContainer>
      {/* Page heading skeleton */}
      <div className="my-12 flex justify-center">
        <div className="h-12 w-64 bg-slate-200 rounded-lg animate-pulse" />
      </div>

      {/* About section skeleton */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Image skeleton */}
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-slate-200 rounded-2xl animate-pulse" />
          </div>

          {/* Content skeleton */}
          <div className="w-full md:w-2/3 space-y-4">
            <div className="h-8 bg-slate-200 rounded w-1/2 animate-pulse" />
            <div className="space-y-3">
              <div className="h-4 bg-slate-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-slate-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-slate-200 rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-slate-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-slate-200 rounded w-4/5 animate-pulse" />
            </div>
          </div>
        </div>

        {/* CTA skeleton */}
        <div className="max-w-2xl mx-auto bg-slate-100 rounded-2xl p-12 animate-pulse">
          <div className="space-y-4">
            <div className="h-8 bg-slate-200 rounded w-1/2 mx-auto" />
            <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto" />
            <div className="flex gap-4 justify-center mt-6">
              <div className="h-12 w-32 bg-slate-200 rounded-xl" />
              <div className="h-12 w-40 bg-slate-200 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
