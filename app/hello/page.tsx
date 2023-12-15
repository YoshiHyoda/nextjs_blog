import Link from "next/link";

export default function HelloPage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center space-y-10">
      <h1 className="text-red-500 text-4xl font-bold">
        Hello, World 🚀🚀🚀🚀🚀🚀🚀
      </h1>
      <Link className="text-white text-2xl underline" href="/">
        Home page
      </Link>
    </main>
  );
}
