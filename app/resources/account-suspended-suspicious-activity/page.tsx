import Link from "next/link";

export default function SuspiciousActivitySuspensionPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Account suspended due to suspicious activity — what it usually means
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains what platforms typically mean by “suspicious
          activity,” why this label is used across many services, and how to
          interpret what it realistically implies for review or appeal options.
          It is informational only and does not guarantee any outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-8 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What “suspicious activity” usually refers to
            </h2>
            <p className="mt-2">
              “Suspicious activity” is a broad classification used when automated
              systems detect patterns that deviate from expected account
              behavior. It does not automatically imply wrongdoing or malicious
              intent.
            </p>
            <p className="mt-2">
              The label is often used when platforms cannot immediately
              distinguish between security risk and policy risk.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Two common categories behind the label
            </h2>
            <p className="mt-2">
              In practice, suspicious activity suspensions usually fall into one
              of two broad categories:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <strong>Security-related signals</strong> — such as unusual login
                locations, rapid IP changes, or compromised credentials
              </li>
              <li>
                <strong>Behavior or integrity signals</strong> — such as
                automation indicators, high-volume actions, or patterns
                resembling spam or abuse
              </li>
            </ul>
            <p className="mt-2">
              Platforms rarely disclose which category applies in a specific
              case.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common triggers across platforms
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Unusual login locations or rapid geographic changes</li>
              <li>Automation or third-party tool signals</li>
              <li>High-volume actions in short timeframes</li>
              <li>Behavior resembling spam or coordinated activity</li>
              <li>Signals linked to previously restricted or connected accounts</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              How to interpret your situation realistically
            </h2>
            <p className="mt-2">
              A suspicious activity suspension often indicates uncertainty on
              the platform’s side rather than a final enforcement conclusion.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                Some cases resolve after verification or internal review
              </li>
              <li>
                Others escalate into longer suspensions or disablements
              </li>
              <li>
                Silence or generic responses are common during this stage
              </li>
            </ul>
            <p className="mt-2">
              The label alone does not predict the final outcome.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Related enforcement states and appeal behavior
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link
                  href="/resources/account-disabled-vs-suspended"
                  className="hover:text-slate-900"
                >
                  Account permanently disabled vs temporarily suspended — what’s the difference?
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/how-account-appeals-work"
                  className="hover:text-slate-900"
                >
                  How account appeals actually work — timelines, limits, and misconceptions
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/appeal-submitted-no-response"
                  className="hover:text-slate-900"
                >
                  Appeal submitted but no response — what that usually means
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/linked-accounts-disabled-together"
                  className="hover:text-slate-900"
                >
                  Multiple accounts linked or disabled together — why this happens
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations
            </h2>
            <p className="mt-2">
              A suspicious activity label does not guarantee reinstatement,
              manual review, or further explanation. Some cases never progress
              beyond automated evaluation.
            </p>
            <p className="mt-2">
              Final enforcement decisions remain solely with the platform.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
