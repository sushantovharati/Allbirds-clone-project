export default function Hero() {
  return (
    <section className="relative overflow-hidden p-3 mt-[29px]">
      <div className="relative h-[580px] overflow-hidden rounded-[17px]">
        <img
          src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_Site_Homepage_Hero_Desktop_16x9-3.jpg?v=1779316981&width=2560"
          alt="Allbirds hero"
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-28 right-16 text-right text-white">
          <p className="mb-6 text-sm font-bold tracking-[0.25em]">
            ALL NEW DASHER NZ COLLECTION
          </p>
          <h1 className="text-3xl font-light">
            Wildly Comfortable. Super Natural.
          </h1>
        </div>
      </div>
    </section>
  );
}
