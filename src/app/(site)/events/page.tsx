export const metadata = { title: "LivecodeX" };

export default function Page() {
  return (
    <div>
      <header className="card p-8">
        <div className="text-sm text-muted">Inter-College Live Coding Competition</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">LivecodeX</h1>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-white/[0.12] px-3 py-1">24 Oct 2025</span>
          <span className="rounded-full border border-white/[0.12] px-3 py-1">CMRIT Hyderabad</span>
          <span className="rounded-full border border-white/[0.12] px-3 py-1">Teams of 1–2</span>
        </div>
        <p className="mt-4 text-sm text-muted max-w-2xl">
          Test your problem-solving and coding skills live on stage. Compete with participants
          from colleges across the city in algorithmic challenges curated by the Data Science Society.
        </p>
      </header>

      <section className="mt-8 grid md:grid-cols-5 gap-6 items-start">
        <div className="md:col-span-3 card p-6">
          <div className="font-medium">About the competition</div>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>• Format: Live coding rounds on curated problems (DSA + implementation)</li>
            <li>• Languages allowed: C/C++, Python, Java, or JavaScript</li>
            <li>• Rounds: Qualifier → Finals (on-site)</li>
            <li>• Eligibility: Open to all undergraduate students (inter-college)</li>
          </ul>

          <div className="mt-6 font-medium">Schedule</div>
          <ul className="mt-2 text-sm grid gap-1">
            <li>• Reporting: 9:30 AM</li>
            <li>• Qualifier: 10:00 AM – 11:30 AM</li>
            <li>• Finals: 1:30 PM – 3:00 PM</li>
            <li>• Results & Felicitation: 4:00 PM</li>
          </ul>

          <div className="mt-6 font-medium">Prizes</div>
          <ul className="mt-2 text-sm grid gap-1">
            <li>• Winner, Runner-up, and Best Freshman awards</li>
            <li>• Swag and certificates for finalists</li>
          </ul>
        </div>

        <aside className="md:col-span-2 grid gap-4">
          <div className="card p-6">
            <div className="font-medium">Event details</div>
            <div className="mt-3 grid gap-2 text-sm">
              <div className="flex items-center justify-between"><span className="text-muted">Date</span><span>24 Oct 2025</span></div>
              <div className="flex items-center justify-between"><span className="text-muted">Venue</span><span>CMRIT Hyderabad</span></div>
              <div className="flex items-center justify-between"><span className="text-muted">Team size</span><span>1–2 members</span></div>
              <div className="flex items-center justify-between"><span className="text-muted">Registration fee</span><span>₹199 per team</span></div>
              <div className="flex items-center justify-between"><span className="text-muted">Contact</span><span>dss@cmrithyderabad.edu.in</span></div>
            </div>
          </div>

          <div className="card p-0 overflow-hidden">
            <div className="p-6">
              <div className="font-medium">Register now</div>
              <p className="mt-1 text-xs text-muted">Fill the Google Form to confirm your participation.</p>
            </div>
            <div className="h-[560px]">
              <iframe
                title="LivecodeX Registration Form"
                src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >Loading…</iframe>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}


