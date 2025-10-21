import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  title: string;
  subtitle?: string;
  footer?: ReactNode;
}>;

// Contract-style card: bold dark header and light content area
export default function ContractCard({ title, subtitle, footer, children }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl card text-foreground">
      <div
        className="p-5 text-white"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--accent) 45%, #000) 0%, #0a0a0a 100%)",
        }}
      >
        <div className="text-xs tracking-wide opacity-80">FEATURED</div>
        <div className="mt-2 text-2xl font-extrabold leading-tight">{title}</div>
        {subtitle && <div className="mt-1 text-sm opacity-90">{subtitle}</div>}
      </div>
      <div className="p-5">
        {children}
        {footer && <div className="mt-4 pt-4 border-t border-white/[0.12]">{footer}</div>}
      </div>
    </div>
  );
}


