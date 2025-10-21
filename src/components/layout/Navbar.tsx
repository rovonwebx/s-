"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/join", label: "Join" },
  { href: "/developer-notes", label: "Dev Notes" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Reduced vertical padding from py-4 to py-2 */}
      <div className="container py-2"> 
        <div className="glass rounded-full border border-white/[0.08] px-5 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          Data Science Society
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`hover:underline underline-offset-4 ${active ? "text-white" : "text-muted"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/join" className="btn-primary rounded-full px-4 py-2 text-sm font-medium">
            Join Now
          </Link>
        </div>
        </div>
      </div>
    </header>
  );
}