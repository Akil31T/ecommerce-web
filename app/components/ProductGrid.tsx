import { Button } from "@/components/ui/button"
import ProductCard from "./ProductCard"

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 128,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 89,
    badge: "New",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 79.99,
    originalPrice: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.3,
    reviews: 256,
    badge: null,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 149.99,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 94,
    badge: "Popular",
  },
  {
    id: 5,
    name: "Fitness Tracker",
    price: 129.99,
    originalPrice: 159.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviews: 167,
    badge: null,
  },
  {
    id: 6,
    name: "Wireless Charger",
    price: 49.99,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.2,
    reviews: 203,
    badge: null,
  },
  {
    id: 7,
    name: "Gaming Mouse",
    price: 89.99,
    originalPrice: 119.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 145,
    badge: "Sale",
  },
  {
    id: 8,
    name: "USB-C Hub",
    price: 69.99,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.1,
    reviews: 78,
    badge: null,
  },
]

export default function ProductGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products designed to enhance your lifestyle
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-gray-900 text-white rounded-full font-medium">All Products</button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 border border-gray-200">
            Electronics
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 border border-gray-200">
            Accessories
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 border border-gray-200">
            Gaming
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  )
}
