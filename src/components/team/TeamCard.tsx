import Link from "next/link";

type Props = {
  name: string;
  role: string;
  initials?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    x?: string;
  };
};

export default function TeamCard({ name, role, initials, socials }: Props) {
  const displayInitials = initials ||
    name
      .split(" ")
      .map((p) => p[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <div className="group relative overflow-hidden card p-5 transition-transform hover:-translate-y-0.5">
      <div className="flex items-center gap-4">
        <div
          className="size-14 shrink-0 rounded-full grid place-items-center text-white text-sm font-semibold"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, color-mix(in oklab, var(--accent) 85%, transparent), #111, color-mix(in oklab, var(--accent) 85%, transparent))",
          }}
        >
          {displayInitials}
        </div>
        <div>
          <div className="font-medium tracking-tight text-foreground">{name}</div>
          <div className="mt-0.5 inline-flex items-center gap-2 text-xs">
            <span className="rounded-full px-2 py-1 border border-white/[0.12] text-muted">{role}</span>
          </div>
        </div>
      </div>
      {(socials?.linkedin || socials?.github || socials?.x) && (
        <div className="mt-4 flex gap-2">
          {socials.linkedin && (
            <Link
              className="rounded-full px-3 py-1 border border-white/[0.12] text-xs hover:border-white/[0.2]"
              href={socials.linkedin}
              target="_blank"
            >
              LinkedIn
            </Link>
          )}
          {socials.github && (
            <Link
              className="rounded-full px-3 py-1 border border-white/[0.12] text-xs hover:border-white/[0.2]"
              href={socials.github}
              target="_blank"
            >
              GitHub
            </Link>
          )}
          {socials.x && (
            <Link
              className="rounded-full px-3 py-1 border border-white/[0.12] text-xs hover:border-white/[0.2]"
              href={socials.x}
              target="_blank"
            >
              X
            </Link>
          )}
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
        background:
          "radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), color-mix(in oklab, var(--accent) 10%, transparent), transparent 40%)",
      }} />
    </div>
  );
}


