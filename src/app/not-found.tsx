import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-cream px-6 text-center">
      <h1 className="font-display text-4xl font-bold text-charcoal">Page not found</h1>
      <p className="mt-4 font-body text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-red-drip px-6 py-3 font-body text-cream transition-colors hover:bg-brand-red-dark"
      >
        Back to homepage
      </Link>
    </main>
  );
}
