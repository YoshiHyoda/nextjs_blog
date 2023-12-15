import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center space-y-10">
      <h1 className="text-4xl text-pink-300 font-bold">Let's goooo!</h1>
      <p>
        <Link className="text-white text-2xl underline" href="/hello">
          Hello page
        </Link>
      </p>
    </main>
  );
}
