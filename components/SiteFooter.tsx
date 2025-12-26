import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-slate-600">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand / description */}
          <div className="max-w-sm">
            <div className="font-medium text-slate-900">
              {site.name}
            </div>
            <p className="mt-2 leading-relaxed">
              Structured appeal documents and guidance for suspended social media
              accounts.
            </p>
          </div>

          {/* Sections */}
          <div className="text-center md:text-left">
            <div className="text-sm font-medium text-slate-900">
              Sections
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#services" className="hover:text-slate-900">
                  What we do
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-slate-900">
                  How it works
                </a>
              </li>
              <li>
                <a href="#boundaries" className="hover:text-slate-900">
                  What this is / is not
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-slate-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-900">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <div className="text-sm font-medium text-slate-900">
              Legal
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-slate-900">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-slate-900">
                  Company information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6 text-xs text-slate-500 space-y-2">
          <p>
            AccountAppeal is operated by AIF OÜ (Estonia, registry code 16654436).
            We provide document preparation and guidance only and are not affiliated with any third-party online platform or service provider.
          </p>
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
