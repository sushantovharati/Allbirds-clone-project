import Image from "next/image";
import Link from "next/link";

type Breadcrumb = {
  label: string;
  href: string;
};

type Props = {
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
};

export default function SlippersHero({
  title,
  description,
  breadcrumbs,
}: Props) {
  return (
    <>
    <section className="relative mb-4 h-[100px] overflow-hidden rounded-[18px]">

      <div className="absolute left-2 top-[60px] z-10 text-white">
        <div className="flex items-center text-[16px] font-sans text-xs leading-4 tracking-wide font-medium"> 
          {breadcrumbs.map((item, index) => (
            <div key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className="transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>

              {index !== breadcrumbs.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="flex items-center justify-center mb-8">
        <div className="z-10 text-black">
        <h1 className="text-[24px] font-sans font-normal leading-tight">
          {title}
        </h1>

        <p className="mt-3 text-[12px] font-semibold text-[#575757]">
          {description}
        </p>
      </div>
    </section>
    </>
  );
}