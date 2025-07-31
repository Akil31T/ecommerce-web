import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Discover Amazing Products</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-md">
              Shop the latest trends and find everything you need with our curated collection of premium products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                View Collection
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Hero Product"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium">Special Offer</div>
              <div className="text-2xl font-bold text-red-500">50% OFF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
