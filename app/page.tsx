'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { products, categories } from '@/data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-balance" style={{ color: 'var(--foreground)' }}>
            Celebrate the Spirit of Jharkhand
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Discover authentic tribal crafts and artisanal goods from the heart of Jharkhand. Every product tells a story of tradition, skill, and heritage.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/products" className="btn-primary">
              Shop Now
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-header text-center">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard
                key={category.name}
                name={category.name}
                image={`/placeholder.svg?height=400&width=400&query=${category.name.toLowerCase()}`}
                count={category.count}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-header text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-header">Our Mission</h2>
          <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--muted)' }}>
            We believe in preserving and celebrating the incredible artisanal traditions of Jharkhand's tribal communities. 
            Each purchase directly supports skilled artisans and helps keep ancient crafts alive for future generations.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            From hand-woven textiles to intricate Dokra castings, every product in our collection is a testament to 
            the creativity, skill, and cultural richness of Jharkhand's tribal people.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
