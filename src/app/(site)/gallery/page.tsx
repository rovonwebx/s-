export const metadata = { title: "Gallery" };

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Gallery</h1>
      <p className="mt-3 text-muted">Highlights from our recent events and projects.</p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card aspect-video" />
        ))}
      </div>
    </div>
  );
}


