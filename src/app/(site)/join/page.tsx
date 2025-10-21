export const metadata = { title: "Join" };

export default function Page() {
  return (
    <div>
      <header className="card p-8">
        <h1 className="text-3xl font-semibold tracking-tight">Join the Data Science Society</h1>
        <p className="mt-3 text-muted max-w-2xl">
          Become a member and get updates about upcoming events, workshops, and exclusive opportunities.
        </p>
      </header>

      <section className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Membership Benefits</h2>
          <ul className="space-y-3 text-sm">
            <li>• Priority access to events and workshops</li>
            <li>• Project showcases and mentorship opportunities</li>
            <li>• Networking with industry professionals and alumni</li>
            <li>• Member-only resources and study groups</li>
            <li>• Exclusive access to research projects</li>
            <li>• Leadership and volunteer opportunities</li>
          </ul>
          
          <div className="mt-6">
            <h3 className="font-medium mb-3">Available Tracks</h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/[0.12] px-3 py-1 text-xs">Machine Learning</span>
              <span className="rounded-full border border-white/[0.12] px-3 py-1 text-xs">Data Visualization</span>
              <span className="rounded-full border border-white/[0.12] px-3 py-1 text-xs">MLOps</span>
              <span className="rounded-full border border-white/[0.12] px-3 py-1 text-xs">Research</span>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Join the Society</h2>
          <div className="h-[500px]">
            <iframe
              title="Join Form"
              src="https://docs.google.com/forms/d/e/JOIN_FORM_ID/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >Loading…</iframe>
          </div>
        </div>
      </section>
    </div>
  );
}


