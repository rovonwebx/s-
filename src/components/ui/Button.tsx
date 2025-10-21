import { ComponentProps, ReactElement, isValidElement, cloneElement } from "react";

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "outline";
  asChild?: boolean;
};

export default function Button({ variant = "primary", asChild = false, className = "", children, ...props }: Props) {
  const base = "rounded-full px-5 py-3 text-sm font-medium transition-colors";
  const variants = {
    primary: "btn-primary",
    outline: "border border-white/[0.12] hover:border-white/[0.2]",
  } as const;
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;
    const childClass = child.props?.className ?? "";
    return cloneElement(child, { className: `${childClass} ${classes}`.trim(), ...props });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
