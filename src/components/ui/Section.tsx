import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ title?: string; subtitle?: string }>;

export default function Section({ title, subtitle, children }: Props) {
  return (
    <section className="py-12">
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle && <p className="text-muted mt-1">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}


