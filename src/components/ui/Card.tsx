import { ComponentProps, PropsWithChildren } from "react";

type Props = PropsWithChildren<ComponentProps<"div">>;

export default function Card({ className = "", children, ...props }: Props) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
}


