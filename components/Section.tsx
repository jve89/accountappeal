import type { ReactNode } from "react";

export function Section(props: {
  id: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section id={props.id} className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
            {props.title}
          </h2>

          {props.subtitle ? (
            <p className="mt-2 text-base text-slate-600">
              {props.subtitle}
            </p>
          ) : null}
        </div>

        {props.children ? (
          <div className="mt-8">{props.children}</div>
        ) : null}
      </div>
    </section>
  );
}
