"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number | null
  image: string
  rating: number
  reviews: number
  badge: string | null
}

export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && <Badge className="bg-red-500 hover:bg-red-600">{product.badge}</Badge>}
          {discountPercentage > 0 && <Badge variant="secondary">-{discountPercentage}%</Badge>}
        </div>

        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className={`absolute top-3 right-3 bg-white/80 hover:bg-white ${
            isWishlisted ? "text-red-500" : "text-gray-600"
          }`}
          onClick={() => {
            setIsWishlisted(!isWishlisted)
            // Add to favorites with quantity 1
            if (!isWishlisted) {
              // Here you would typically call an API to add to favorites
              console.log("Added to favorites:", product.name)
            }
          }}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>

        {/* Quick Add to Cart - appears on hover */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full bg-gray-900 hover:bg-gray-800">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}
