import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail } from "lucide-react";

export default function ReturnLoginSection() {
  return (
    <section className="relative min-h-[920px] overflow-hidden">
      <Image
        src="https://data.getredo.com/redo/portal-builder-assets/69a89b9e9a879990e4d1e698/background-store-login-background-eff1ebc00ffd1ebf.jpg"
        alt="Returns and exchanges"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/5" />

      <Link
        href="/"
        className="absolute left-12 top-12 z-10 flex items-center gap-2 text-[18px] text-black underline"
      >
        <ArrowLeft size={18} />
        Back to store
      </Link>

      <div className="relative z-10 flex h-[820px] items-start justify-center px-6 pt-28 mb-80">
        <div className="w-full max-w-[510px] rounded-[14px] bg-white/95 px-9 py-12 shadow-lg">
          <h1 className="mb-8 text-center text-[58px] font-bold italic tracking-tight">
            allbirds
          </h1>

          <h2 className="text-center text-[26px] font-bold">
            Returns & Exchanges
          </h2>

          <p className="mt-3 text-center text-[13px]">
            Enter your email or zip and order or tracking number to login
          </p>

          <form className="mt-9 space-y-6">
            <div>
              <label className="mb-2 block text-[16px]">
                Email or Zip code
              </label>
              <input
                type="text"
                placeholder="Enter email or zip..."
                className="h- [10px] w-full rounded-full border border-black bg-white px-5 py-2 text-[15px] outline-none placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-[16px]">
                Order # or Tracking #
              </label>
              <input
                type="text"
                placeholder="Enter order or tracking #..."
                className="h- [10px] w-full rounded-full border border-black bg-white px-5 py-2 text-[15px] outline-none placeholder:text-gray-400"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-full bg-gray-100 py-3 text-[16px] text-gray-400 shadow"
            >
              Search
            </button>
          </form>

          <div className="my-4 flex items-center gap-2">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm font-bold">OR</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <div className="space-y-3">
            <button className="flex w-full items-center justify-center gap-3 rounded-full border border-black py-2 text-[18px]">
              <span className="text-[20px] font-bold text-blue-500">G</span>
              Sign in with Google
            </button>

            <button className="flex w-full items-center justify-center gap-3 rounded-full border border-black py-2 text-[18px]">
              <Mail size={22} />
              Sign in with email
            </button>
          </div>

          <div className="mt-5 text-center">
            <Link href="#" className="text-[15px] underline">
              Returning a gift?
            </Link>
          </div>

          <div className="my-5 h-px bg-gray-300" />

          <div className="text-center">
            <Link href="#return-policy" className="text-[15px] underline">
              Return Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}