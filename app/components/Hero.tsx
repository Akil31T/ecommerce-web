import Image from "next/image";

export default function Hero() {
  return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

  {/* Left Big Banner */}
  <div className="relative md:col-span-2 h-[350px] rounded-lg overflow-hidden">
    <Image
      src="https://i.pinimg.com/736x/f3/e6/2d/f3e62d57e975d81018c6c0dde3191736.jpg"
      alt="Knitted Cord Coasters"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/30 p-6 flex flex-col justify-center">
      <p className="text-sm text-white">Flat Discount 30%</p>
      <h2 className="text-2xl font-bold text-white">
        Knitted Cord <br /> Coasters
      </h2>
      <button className="mt-4 w-fit bg-black text-white px-4 py-2 rounded">
        Shop Now
      </button>
    </div>
  </div>

  {/* Right Side Column */}
  <div className="flex flex-col gap-4">

    {/* Right Top Banner */}
    <div className="relative h-[170px] rounded-lg overflow-hidden">
      <Image
        src="https://i.pinimg.com/1200x/2d/d5/43/2dd54354f19b06b30888cef31b025d5b.jpg"
        alt="Iconic Cloud Coasters"
        fill
        className="object-cover"
      />
    </div>

    {/* Right Bottom Banner */}
    <div className="relative h-[170px] rounded-lg overflow-hidden">
      <Image
        src="https://i.pinimg.com/736x/bc/6f/c7/bc6fc723ba8fcc52369f6663a5f3a98a.jpg"
        alt="Special Matte Nordic"
        fill
        className="object-cover"
      />
    </div>

  </div>

</div>

  );
}
