import Link from "next/link";
import { BackLink } from "@/components/resources/BackLink";

export default function DisabledVsSuspendedPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Account permanently disabled vs temporarily suspended — what’s the difference?
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains how major platforms typically distinguish between
          temporary suspensions and permanent account disablements, what these
          labels usually signal internally, and what they realistically mean for
          review or appeal options. It is informational only and does not
          guarantee any outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-8 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">Temporary suspension</h2>
            <p className="mt-2">
              A temporary suspension usually indicates that access has been
              restricted pending review, verification, or completion of a
              defined process. In many cases, platforms still consider the
              account recoverable.
            </p>
            <p className="mt-2">
              Temporary suspensions often allow:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Submission of an appeal or review request</li>
              <li>Identity or ownership verification</li>
              <li>Restoration if no violation is confirmed</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">Permanent disablement</h2>
            <p className="mt-2">
              Permanent disablement usually means the platform has concluded
              that the account should not be restored under standard review
              processes. This label often reflects higher enforcement confidence
              or repeated policy issues.
            </p>
            <p className="mt-2">
              In practice, permanent disablement often involves:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Limited or no appeal options</li>
              <li>Generic or final response wording</li>
              <li>Propagation of enforcement across linked assets</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              How escalation typically occurs
            </h2>
            <p className="mt-2">
              On many platforms, disablement represents the final stage of an
              escalation process. Restrictions or suspensions may precede
              disablement if risk signals persist or prior reviews fail.
            </p>
            <p className="mt-2">
              For earlier-stage enforcement, see{" "}
              <Link
                href="/resources/account-restricted-vs-suspended"
                className="underline hover:text-slate-900"
              >
                how restrictions differ from suspensions
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">Why wording is inconsistent</h2>
            <p className="mt-2">
              Platforms do not use these terms consistently. The same restriction
              may be labeled differently depending on platform, account type, or
              enforcement category.
            </p>
            <p className="mt-2">
              Users should therefore focus less on wording and more on what
              actions are actually available inside the account interface.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What users can realistically infer
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>A suspension usually means some review path still exists</li>
              <li>
                A permanent disablement often means review options are limited
                or exhausted
              </li>
              <li>Silence or generic replies can occur in both cases</li>
            </ul>
            <p className="mt-2">
              For a broader explanation of how review systems operate, see{" "}
              <Link
                href="/resources/how-account-appeals-work"
                className="underline hover:text-slate-900"
              >
                how account appeals actually work
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Platform-specific usage
            </h2>
            <p className="mt-2">
              Each platform applies these labels differently. For more detailed
              explanations, see:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link href="/resources/instagram-account-suspended" className="hover:text-slate-900">
                  Instagram account suspended — what to do
                </Link>
              </li>
              <li>
                <Link href="/resources/instagram-community-guidelines-disabled" className="hover:text-slate-900">
                  Instagram disabled for “community guidelines”
                </Link>
              </li>
              <li>
                <Link href="/resources/facebook-account-disabled" className="hover:text-slate-900">
                  Facebook account disabled — next steps
                </Link>
              </li>
              <li>
                <Link href="/resources/google-account-disabled" className="hover:text-slate-900">
                  Google account disabled — policy or security reasons
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">Important limitations</h2>
            <p className="mt-2">
              This guide does not imply that permanent disablements can be
              reversed or that suspensions will always be lifted. Final decisions
              remain solely with the platform.
            </p>
          </section>
          <BackLink href="/resources" label="Back to all guides" />
        </div>
      </div>
    </section>
  );
}
