import Link from "next/link";
import { BackLink } from "@/components/resources/BackLink";

export default function XAccountStatusGuidePage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          X account locked vs suspended vs banned — what’s the difference?
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains how X (formerly Twitter) distinguishes between
          locked, suspended, and banned accounts, what each status typically
          means, and how review or appeal options usually differ. It is
          informational only and does not guarantee reinstatement.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-8 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">Account locked</h2>
            <p className="mt-2">
              A locked account usually requires a specific action before access
              is restored. This may include verifying information, confirming
              ownership, or removing content flagged by the platform.
            </p>
            <p className="mt-2">
              Locks are often temporary and may be resolved without a formal
              appeal if the required action is completed.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">Account suspended</h2>
            <p className="mt-2">
              A suspension restricts account access due to policy enforcement.
              Some suspensions are temporary, while others remain in place
              pending review or enforcement confirmation.
            </p>
            <p className="mt-2">
              For a detailed explanation of how suspensions typically unfold,
              see:
            </p>
            <p className="mt-2">
              <Link
                href="/resources/x-account-suspended"
                className="hover:text-slate-900"
              >
                X (Twitter) account suspended — what actually happens and what to do next
              </Link>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">Account banned</h2>
            <p className="mt-2">
              A ban usually indicates that X has determined the account should
              not be restored under normal review processes. Login access is
              typically removed, and the platform may restrict the creation of
              new accounts.
            </p>
            <p className="mt-2">
              Bans are often associated with repeated or severe policy
              violations and may offer limited or no appeal options.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              How these states typically relate
            </h2>
            <p className="mt-2">
              In many cases, these enforcement states reflect an escalation
              process. Accounts may move from temporary locks to suspensions,
              and eventually to bans if issues persist or reviews fail.
            </p>
            <p className="mt-2">
              Not every account follows this path, but escalation is common when
              enforcement signals accumulate.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Review and appeal options
            </h2>
            <p className="mt-2">
              X may provide appeal or review options depending on the enforcement
              type and the account’s prior history. Responses may be automated,
              delayed, or absent.
            </p>
            <p className="mt-2">
              If you submitted an appeal and did not receive a response, see:
            </p>
            <p className="mt-2">
              <Link
                href="/resources/appeal-submitted-no-response"
                className="hover:text-slate-900"
              >
                Appeal submitted but no response — what that usually means
              </Link>
            </p>
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
            <h2 className="font-medium text-slate-900">Important limitations</h2>
            <p className="mt-2">
              This guide does not imply that locked, suspended, or banned
              accounts can always be restored, that a specific appeal approach
              will succeed, or that X will provide detailed explanations in
              every case.
            </p>
            <p className="mt-2">
              Final decisions remain solely with the platform.
            </p>
          </section>
          <BackLink href="/resources" label="Back to all guides" />
        </div>
      </div>
    </section>
  );
}
