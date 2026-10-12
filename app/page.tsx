import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mxx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track your job applications
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              capture, organize, and track your job applications in one place
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Start for free
              </button>
              <p>Free forever</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
