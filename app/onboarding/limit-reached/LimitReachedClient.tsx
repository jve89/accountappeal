"use client";

import { useSearchParams } from "next/navigation";

export default function LimitReachedClient() {
  const searchParams = useSearchParams();
  const tier = searchParams.get("tier") ?? "standard";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Upload limit reached
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          You’ve reached the maximum allowed file size for this onboarding
          submission.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <p>To keep the process reliable and review-friendly, we currently accept:</p>

            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li><span className="font-medium text-slate-900">Up to 5 files</span></li>
              <li><span className="font-medium text-slate-900">Maximum 2&nbsp;MB per file</span></li>
              <li><span className="font-medium text-slate-900">Images or PDFs only</span></li>
            </ul>
          </section>

          <section>
            <p>No information has been lost, and nothing has been submitted yet.</p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">What you can do next</h2>

            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Remove one or more files and try again</li>
              <li>Upload a smaller version of a file</li>
              <li>Combine multiple pages into a single PDF (if applicable)</li>
            </ul>

            <p className="mt-3">
              More files do not automatically make a case stronger. Clear,
              relevant evidence is more effective than volume.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">Need help?</h2>
            <p className="mt-2">
              If you’re unsure which files are most relevant, or you believe your
              situation requires additional material, you can contact us before
              resubmitting.
            </p>
          </section>

          <div className="pt-2">
            <a
              href={`/onboarding?tier=${tier}`}
              className="inline-flex rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Back to onboarding
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
