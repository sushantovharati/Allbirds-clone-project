import Image from "next/image";
import Link from "next/link";

type Breadcrumb = {
    label: string;
    href: string;
};

type Props = {
    title: string;
    breadcrumbs: Breadcrumb[];
};

export default function WomensActiveShoesHero({
    title,
    breadcrumbs,
}: Props) {
    return (
        <section className="relative mb-4 h-[180px] overflow-hidden rounded-[18px]">
      
            <div className="absolute inset-0" />

            <div className="absolute left-2 top-[60px] z-10 text-[#575757]">
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

            <div className="mt-[100px] px-[30px] text-black">
                <h1 className="text-[26px] font-normal leading-tight">
                    {title}
                </h1>
            </div>
        </section>
    );
}