import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-12 text-sm text-slate-600">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Identity */}
          <div className="max-w-sm">
            <div className="font-medium text-slate-900">{site.name}</div>
            <div className="mt-1">
              Structured appeal documents and guidance for suspended social media
              accounts.
            </div>
          </div>

          {/* Legal */}
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
          </div>
        </div>

        <div className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
