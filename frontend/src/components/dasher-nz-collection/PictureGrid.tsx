import Image from "next/image";

export default function PictureGrid() {
  return (
    <section className="my-10">
      <div className="grid auto-rows-fr grid-cols-2 gap-2.5 md:grid-cols-4">
        {/* Large Image */}
        <div className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-2xl">
          <Image
            src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_Site_ColorGrid-01_Desktop-Mobile_1x1_ebb8a1e9-070c-47ff-9fae-37d31c6e301a.jpg?v=1770054806&width=1024"
            alt="Dasher NZ"
            fill
            className="object-cover"
          />
        </div>

        {/* Top Right */}
        <div className="relative col-span-2 aspect-[2/1] overflow-hidden rounded-2xl">
          <Image
            src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_Site_ColorGrid-04_Desktop-Mobile_16x9_0dacd1bf-0eb2-48be-8192-974177cc69fa.jpg?v=1769466618&width=1024"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Left */}
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_Site_ColorGrid-02_Desktop-Mobile_1x1-1.jpg?v=1769466617&width=1024"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Right */}
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_Site_ColorGrid-02_Desktop-Mobile_1x1_4cbab8bf-4fcb-44e0-8e45-d18658028020.jpg?v=1769466617&width=1024"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}