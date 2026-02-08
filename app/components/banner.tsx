"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  "/img/banner1.jpg",
  "/img/banner2.jpg",
  "/img/banner3.jpg",
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={banner}
            alt={`banner-${index}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      ))}

      {/* Left Button */}
      <button
        onClick={() =>
          setCurrent((current - 1 + banners.length) % banners.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={() => setCurrent((current + 1) % banners.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
}
