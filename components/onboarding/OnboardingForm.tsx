import { submitOnboarding } from "@/app/actions/onboarding";

type Tier = "basic" | "standard" | "premium";

export function OnboardingForm({
  tier,
  prefillEmail,
}: {
  tier: Tier;
  prefillEmail?: string | null;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">
        Onboarding – {tier.charAt(0).toUpperCase() + tier.slice(1)}
      </h1>

      <p className="mt-4 text-neutral-600">
        Please answer the questions below as factually and completely as possible.
        This information is used to prepare your appeal documents.
      </p>

      <form action={submitOnboarding} className="mt-10 space-y-10">
        <input type="hidden" name="tier" value={tier} />

        {/* Email (prefilled from Stripe when available) */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <p className="mt-1 text-sm text-neutral-600">
            We’ll use this to contact you if we need a clarification.
          </p>
          <input
            type="email"
            name="email"
            required
            defaultValue={prefillEmail ?? ""}
            className="mt-3 w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* 1. Situation description */}
        <div>
          <label className="block text-sm font-medium">
            Please describe the situation that led to your suspension
          </label>
          <p className="mt-1 text-sm text-neutral-600">
            What happened before it, any messages you received, when it occurred,
            what you think may have triggered it, and relevant context about your
            account (personal, business, creator, etc.). More details make the appeal
            stronger, but please stick to facts and platform messages rather than
            assumptions.
          </p>
          <textarea
            name="suspension_description"
            rows={6}
            className="mt-3 w-full rounded-md border px-3 py-2"
            required
          />
        </div>

        {/* 2. Screenshots availability */}
        <div>
          <label className="block text-sm font-medium">
            Do you have any screenshots or messages related to the suspension?
          </label>
          <div className="mt-3 space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="has_screenshots" value="yes" required />
              Yes, I can upload them
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="has_screenshots" value="later" />
              Not yet, but I can get them
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="has_screenshots" value="no" />
              No, I have nothing
            </label>
          </div>
        </div>

        {/* 3. Uploads */}
        <div>
          <label className="block text-sm font-medium">
            Upload screenshots or messages (optional)
          </label>
          <p className="mt-1 text-sm text-neutral-600">
            Suspension notices, warnings, login alerts, or error messages. You can
            always send more later.
          </p>
          <input
            type="file"
            name="attachments"
            multiple
            className="mt-3 block w-full text-sm"
          />
        </div>

        {/* 4. Business impact */}
        <div>
          <label className="block text-sm font-medium">
            If your account is for business or creator use, please describe how the
            suspension affects your work
          </label>
          <p className="mt-1 text-sm text-neutral-600">
            Focus on practical impact such as lost access, ads paused, audience
            reach, or revenue disruption.
          </p>
          <textarea
            name="business_impact"
            rows={4}
            className="mt-3 w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* 5. Scope confirmation */}
        <div className="rounded-lg border p-4">
          <label className="block text-sm font-medium">
            Please confirm that you understand the scope of this service
          </label>
          <p className="mt-2 text-sm text-neutral-600">
            This service includes document preparation and guidance only. You will
            submit everything yourself, and platform response times and outcomes are
            outside anyone’s control.
          </p>

          <div className="mt-3 space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="scope_confirmation"
                value="understand"
                required
              />
              Yes, I understand
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="scope_confirmation" value="clarification" />
              I understand, but I need clarification before we proceed
            </label>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Submit onboarding
          </button>
        </div>
      </form>
    </main>
  );
}
