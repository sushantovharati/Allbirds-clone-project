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

export default function CollectionIntro({
    title,
    description,
    breadcrumbs,
}: Props) {
    return (
        <section className="relative top-10 mb-4 h-[220px] rounded-[18px]">
            {/* Breadcrumb */}
            <div className="absolute left-7 top-5 flex items-center text-[16px] text-[#243b53]">
                {breadcrumbs.map((item, index) => (
                    <div key={item.href} className="flex items-center">
                        <Link href={item.href} className="hover:underline">
                            {item.label}
                        </Link>

                        {index !== breadcrumbs.length - 1 && (
                            <span className="mx-2">/</span>
                        )}
                    </div>
                ))}
            </div>

            {/* Center Content */}
            <div className="flex h-full flex-col items-center justify-center px-6 text-center md:px-20">
                <h1 className="mb-2 text-xl leading-6 text-black md:text-2xl md:leading-8">
                    {title}
                </h1>

                <div className="max-w-[800px]">
                    <p className="text-sm leading-5 text-[#4b5563]">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}