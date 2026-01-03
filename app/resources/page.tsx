import Link from "next/link";

export default function ResourcesPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Resources
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This section provides practical, platform-agnostic information about
          account suspensions, appeal processes, and common review outcomes. The
          material is informational only and does not constitute instructions,
          guarantees, or legal advice.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              Guides
            </h2>

            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>
                <Link
                  href="/resources/instagram-account-suspended"
                  className="hover:text-slate-900"
                >
                  Instagram account suspended — what to do
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/facebook-account-disabled"
                  className="hover:text-slate-900"
                >
                  Facebook account disabled — next steps
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/instagram-appeal-ignored"
                  className="hover:text-slate-900"
                >
                Instagram appeal rejected or ignored — what it actually means
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Scope and limitations
            </h2>
            <p className="mt-2">
              The information provided here reflects commonly observed platform
              processes and user-facing terminology. Platform policies, internal
              review criteria, and enforcement practices may change at any time.
            </p>
            <p className="mt-2">
              These resources are not exhaustive and are intended to support
              general understanding only. Individual cases may differ
              significantly based on platform, account history, and context.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
