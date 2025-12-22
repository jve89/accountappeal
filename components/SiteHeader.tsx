import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden gap-5 text-sm text-neutral-700 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-black">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-md border px-3 py-1.5 text-sm hover:bg-neutral-50"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
