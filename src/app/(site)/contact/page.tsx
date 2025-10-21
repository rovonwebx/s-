export const metadata = { title: "Contact" };

export default function Page() {
  return (
    <div>
      <header className="card p-8">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-muted max-w-2xl">
          Reach out for partnerships, questions, or collaborations. We&apos;d love to hear from you!
        </p>
      </header>

      <section className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-muted">Email</div>
              <div className="text-foreground">dss@cmrithyderabad.edu.in</div>
            </div>
            <div>
              <div className="text-sm text-muted">Location</div>
              <div className="text-foreground">CMRIT Hyderabad, Data Science Society Room</div>
            </div>
            <div>
              <div className="text-sm text-muted">Office Hours</div>
              <div className="text-foreground">Wed–Fri, 3:00–5:00 PM</div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Send us a message</h2>
          <div className="h-[500px]">
            <iframe
              title="Contact Form"
              src="https://docs.google.com/forms/d/e/CONTACT_FORM_ID/viewform?embedded=true"
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
