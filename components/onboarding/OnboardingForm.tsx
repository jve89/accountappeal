"use client";

import { useState } from "react";
import { submitOnboarding } from "@/app/actions/onboarding";

type Tier = "basic" | "standard" | "premium";

export function OnboardingForm({
  tier,
  prefillEmail,
}: {
  tier: Tier;
  prefillEmail?: string | null;
}) {
  const [fileCount, setFileCount] = useState(0);

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
          Onboarding – {tier.charAt(0).toUpperCase() + tier.slice(1)}
        </h1>

        <p className="mt-3 text-slate-600">
          Please answer the questions below as factually and completely as possible.
          This information is used to prepare your appeal documents.
        </p>
      </div>

      {/* Form card */}
      <div className="mt-10 rounded-lg border border-slate-200 bg-white p-8">
        <form action={submitOnboarding} encType="multipart/form-data" className="space-y-10">
          <input type="hidden" name="tier" value={tier} />

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-900">
              Email
            </label>
            <p className="mt-1 text-sm text-slate-600">
              We’ll use this to contact you if we need clarification.
            </p>
            <input
              type="email"
              name="email"
              required
              defaultValue={prefillEmail ?? ""}
              className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>

          {/* Situation description */}
          <div>
            <label className="block text-sm font-medium text-slate-900">
              Please describe the situation that led to your suspension
            </label>
            <p className="mt-1 text-sm text-slate-600">
              What happened before it, any messages you received, when it occurred,
              and relevant context about your account. Stick to facts.
            </p>
            <textarea
              name="suspension_description"
              rows={6}
              required
              className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>

          {/* Screenshots availability */}
          <div>
            <label className="block text-sm font-medium text-slate-900">
              Do you have any screenshots or messages related to the suspension?
            </label>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
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

          {/* Uploads */}
          <div>
            <label className="block text-sm font-medium text-slate-900">
              Upload screenshots or messages (optional)
            </label>
            <p className="mt-1 text-sm text-slate-600">
              Images or PDFs only. Max 5 files, 5 MB each.
            </p>

            <div className="mt-3">
              <label
                htmlFor="attachments"
                className="inline-flex cursor-pointer items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Choose files
              </label>

              <span className="ml-3 text-sm text-slate-500">
                {fileCount === 0
                  ? "No files selected"
                  : `${fileCount} file${fileCount > 1 ? "s" : ""} selected`}
              </span>

              <input
                id="attachments"
                type="file"
                name="attachments"
                multiple
                accept="image/*,application/pdf"
                className="sr-only"
                onChange={(e) =>
                  setFileCount(e.target.files?.length ?? 0)
                }
              />
            </div>
          </div>

          {/* Business impact */}
          <div>
            <label className="block text-sm font-medium text-slate-900">
              If your account is for business or creator use, describe the impact
            </label>
            <textarea
              name="business_impact"
              rows={4}
              className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>

          {/* Scope confirmation */}
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <label className="block text-sm font-medium text-slate-900">
              Please confirm that you understand the scope of this service
            </label>

            <div className="mt-3 space-y-2 text-sm text-slate-700">
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
                <input
                  type="radio"
                  name="scope_confirmation"
                  value="clarification"
                />
                I understand, but I need clarification before we proceed
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Submit onboarding
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
