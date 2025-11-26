import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Welcome to Bear Appeal</h2>
      </div>
    </main>
  );
}
