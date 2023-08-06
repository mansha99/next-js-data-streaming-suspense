import RepoComponent from "@/components/repo-component";
import RepoComponentLoading from "@/components/repo-component-loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="p-10 ">
      <div className="flex flex-row">
        <Suspense fallback={<RepoComponentLoading />}>
          <RepoComponent slug="twitter" />
        </Suspense>

        <Suspense fallback={<RepoComponentLoading />}>
          <RepoComponent slug="facebook" />
        </Suspense>

        <Suspense fallback={<RepoComponentLoading />}>
          <RepoComponent slug="amazon" />
        </Suspense>

        <Suspense fallback={<RepoComponentLoading />}>
          <RepoComponent slug="yahoo" />
        </Suspense>
      </div>
      <div className="flex flex-row">
        <Suspense fallback={<RepoComponentLoading />}>
          <RepoComponent slug="apple" />
        </Suspense>

        <Suspense fallback={<RepoComponentLoading />}>
          <RepoComponent slug="laravel" />
        </Suspense>

        <Suspense fallback={<RepoComponentLoading />}>
          <RepoComponent slug="django" />
        </Suspense>
      </div>
    </main>
  );
}
