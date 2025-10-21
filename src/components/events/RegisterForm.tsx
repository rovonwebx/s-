"use client";

import { useState } from "react";
import type { EventItem } from "@/data/sample";

type Props = { events: EventItem[] };

export default function RegisterForm({ events }: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(events[0]?.id ?? null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const evt = events.find((x) => x.id === selectedId);
    setSubmitted(evt ? `Registered ${name} for ${evt.title}` : `Registered ${name}`);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={submit} className="mt-4 grid gap-3 max-w-md">
      <select
        className="card px-4 py-3"
        value={selectedId ?? undefined}
        onChange={(e) => setSelectedId(parseInt(e.target.value))}
      >
        {events.map((e) => (
          <option key={e.id} value={e.id}>
            {e.title} — {e.date}
          </option>
        ))}
      </select>
      <input
        className="card px-4 py-3"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="card px-4 py-3"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="btn-primary rounded-full px-5 py-3 text-sm font-medium w-max">Register</button>
      {submitted && (
        <div className="text-sm text-[color:var(--accent)]">{submitted}</div>
      )}
    </form>
  );
}


