"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedMaterial, setSelectedMaterial] = useState<string[]>([]);
  const [selectedTribe, setSelectedTribe] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const categoryFilter = searchParams.get("category") || "";

  // ============================
  // 🔍 FILTER + SORT LOGIC
  // ============================
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category
    if (categoryFilter) {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    // Search
    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Price Range
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Material
    if (selectedMaterial.length > 0) {
      filtered = filtered.filter((p) =>
        selectedMaterial.includes(p.material)
      );
    }

    // Tribe
    if (selectedTribe.length > 0) {
      filtered = filtered.filter((p) => selectedTribe.includes(p.tribe));
    }

    // Sorting
    if (sortBy === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [
    categoryFilter,
    searchTerm,
    priceRange,
    selectedMaterial,
    selectedTribe,
    sortBy,
  ]);

  // Unique Filters
  const uniqueMaterials = Array.from(new Set(products.map((p) => p.material)));
  const uniqueTribes = Array.from(new Set(products.map((p) => p.tribe)));

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1
          className="text-4xl font-serif mb-8"
          style={{ color: "var(--foreground)" }}
        >
          {categoryFilter ? `${categoryFilter} Products` : "All Products"}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* ===============================
              🔧 SIDEBAR — FILTERS
          =============================== */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Search */}
            <div>
              <label
                className="block font-semibold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                Search
              </label>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field w-full"
              />
            </div>

            {/* Price Range */}
            <div>
              <label
                className="block font-semibold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                Price Range
              </label>

              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-full"
              />

              <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
                ₹{priceRange[0]} - ₹{priceRange[1]}
              </p>
            </div>

            {/* Material Filter */}
            <div>
              <label
                className="block font-semibold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                Material
              </label>

              <div className="space-y-2">
                {uniqueMaterials.map((material) => (
                  <label
                    key={material}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedMaterial.includes(material)}
                      onChange={(e) =>
                        e.target.checked
                          ? setSelectedMaterial([...selectedMaterial, material])
                          : setSelectedMaterial(
                              selectedMaterial.filter((m) => m !== material)
                            )
                      }
                      className="w-4 h-4"
                    />
                    <span style={{ color: "var(--foreground)" }}>
                      {material}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tribe Filter */}
            <div>
              <label
                className="block font-semibold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                Tribe
              </label>

              <div className="space-y-2 max-h-40 overflow-y-auto">
                {uniqueTribes.map((tribe) => (
                  <label
                    key={tribe}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTribe.includes(tribe)}
                      onChange={(e) =>
                        e.target.checked
                          ? setSelectedTribe([...selectedTribe, tribe])
                          : setSelectedTribe(
                              selectedTribe.filter((t) => t !== tribe)
                            )
                      }
                      className="w-4 h-4"
                    />
                    <span style={{ color: "var(--foreground)" }}>{tribe}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* ===============================
              🛍️ PRODUCT LIST
          =============================== */}
          <main className="lg:col-span-3">
            {/* Sort Options */}
            <div className="mb-8 flex justify-between items-center">
              <p style={{ color: "var(--muted)" }}>
                Showing {filteredProducts.length} products
              </p>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field w-48"
              >
                <option value="popular">Most Popular</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p
                  className="text-lg"
                  style={{ color: "var(--muted)" }}
                >
                  No products found matching your filters.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
