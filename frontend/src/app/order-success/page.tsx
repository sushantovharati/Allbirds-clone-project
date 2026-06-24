import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-4xl font-semibold">Order Placed Successfully!</h1>
      <p className="mb-8 text-gray-600">
        Thank you for your order. We will contact you soon.
      </p>

      <Link
        href="/"
        className="rounded-full bg-black px-8 py-4 text-sm font-bold uppercase text-white"
      >
        Back To Home
      </Link>
    </main>
  );
}