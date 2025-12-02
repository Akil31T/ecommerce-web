"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { Product } from "@/lib/types";
import apiCall from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/constant";
import { ca } from "zod/v4/locales";

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await apiCall(API_ENDPOINTS.PRODUCTS, "GET");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

const categories = [...new Set(products.map((p) => p.category))];


  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[--text-color] mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-[--text-color] max-w-2xl mx-auto">
            Discover our handpicked selection of premium products designed to
            enhance your lifestyle
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-medium cursor-pointer border border-gray-900 ${
              selectedCategory === null
                ? "bg-primary text-[--text-color]"
                : "bg-background text-[--text-color]  hover:bg-gray-100"
            }`}
          >
            All Products
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium capitalize cursor-pointer border border-gray-900 ${
                selectedCategory === category
                  ? "bg-primary text-[--text-color]"
                  : "bg-background text-[--text-color]  hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
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
  );
}
