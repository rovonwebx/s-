import { PropsWithChildren } from "react";

export default function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/[0.12] px-2 py-1 text-xs text-muted">
      {children}
    </span>
  );
}


