"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge"
import { Product } from "@/lib/types";
import SignUp from "./SignUp";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [open, setOpen] = useState(false);

  // const discountPercentage = product.originalPrice
  //   ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
  //   : 0

  const handleAddToWishlist = () => {
    setOpen(true);
    if (open) {
      setIsWishlisted(!isWishlisted);
    }
    if (!isWishlisted) {
      console.log("Added to favorites:", product.name);
    }
  };
  console.log(product.image, "AKIL  ");

  return (
    <div className="group rounded-lg bg-white text-[var(--color-text)] border border-[var(--color-primary)] hover:border-[var(--color-secondary)] shadow-sm hover:shadow-4xl transition-all duration-300 overflow-hidden hover:scale-105">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <SignUp open={open} setOpen={setOpen} />
        <img
          src={product.image || ""}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
        /> */}

        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className={`cursor-pointer absolute top-3 right-3 bg-white/80 hover:bg-white ${
            isWishlisted ? "text-red-500" : "text-gray-600"
          }`}
          onClick={handleAddToWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>

        {/* Quick Add to Cart - appears on hover */}
        <div className="absolute bottom-3 left-3 right-3 ">
          <Button
            className="w-full cursor-pointer bg-black text-white"
            onClick={() => {
              setOpen(true);
            }}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button
            className="w-full mt-2 cursor-pointer bg-white text-black border border-black hover:bg-gray-100"
            onClick={() => {
              router.push("/Productview");
            }}
          >
            View Details
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-[var(--text-color)]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {/* {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))} */}
          </div>
          <span className="text-sm text-gray-600">
            {/* {product.rating} ({product.reviews}) */}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          {/* {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )} */}
        </div>
      </div>
    </div>
  );
}
