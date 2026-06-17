import Image from "next/image";
import Link from "next/link";

type Breadcrumb = {
  label: string;
  href: string;
};

type Props = {
  image: string;
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
};

export default function CollectionHero({
  image,
  title,
  description,
  breadcrumbs,
}: Props) {
  return (
    <section className="relative mb-4 h-[370px] overflow-hidden rounded-[18px]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute left-7 top-20 z-10 text-white">
        <div className="flex items-center text-[16px]">
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

      <div className="absolute bottom-8 left-7 z-10 text-white">
        <h1 className="text-[24px] font-normal leading-tight">
          {title}
        </h1>

        <p className="mt-3 text-[12px] font-semibold">
          {description}
        </p>
      </div>
    </section>
  );
}