'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Toast from '@/components/Toast';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const { dispatch } = useCart();

  const product = products.find(p => p.id === params.id);
  const relatedProducts = products.filter(
    p => p.category === product?.category && p.id !== params.id
  ).slice(0, 3);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-serif" style={{ color: 'var(--foreground)' }}>Product not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity,
        image: product.image,
        tribe: product.tribe,
      },
    });
    setShowToast(true);
    setQuantity(1);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex gap-2 mb-8" style={{ color: 'var(--muted)' }}>
          <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:opacity-70 transition-opacity">Products</Link>
          <span>/</span>
          <span>{product.title}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div style={{ backgroundColor: 'var(--light-bg)' }}>
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-auto"
            />
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <p className="font-medium mb-2" style={{ color: 'var(--accent-green)' }}>{product.tribe} Tribe</p>
              <h1 className="text-4xl font-serif" style={{ color: 'var(--foreground)' }}>{product.title}</h1>
            </div>

            <div className="py-6" style={{ borderTop: `1px solid var(--border)`, borderBottom: `1px solid var(--border)` }}>
              <p className="text-3xl font-semibold" style={{ color: 'var(--primary-brown)' }}>₹{product.price}</p>
            </div>

            <div className="space-y-4">
              <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{product.description}</p>
              <div className="grid grid-cols-2 gap-4 py-4 p-4" style={{ backgroundColor: 'var(--light-bg)' }}>
                <div>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>Material</p>
                  <p className="font-semibold" style={{ color: 'var(--foreground)' }}>{product.material}</p>
                </div>
                <div>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>Category</p>
                  <p className="font-semibold" style={{ color: 'var(--foreground)' }}>{product.category}</p>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-medium" style={{ color: 'var(--foreground)' }}>Quantity:</label>
                <div className="flex items-center" style={{ border: `1px solid var(--border)` }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2"
                    style={{ color: 'var(--foreground)' }}
                  >
                    -
                  </button>
                  <span className="px-6 py-2" style={{ borderLeft: `1px solid var(--border)`, borderRight: `1px solid var(--border)` }}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2"
                    style={{ color: 'var(--foreground)' }}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="btn-primary w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Artisan Section */}
        <section className="py-12 mb-20" style={{ borderTop: `1px solid var(--border)`, borderBottom: `1px solid var(--border)` }}>
          <h2 className="section-header">About the Artisan</h2>
          <div className="p-8" style={{ backgroundColor: 'var(--light-bg)' }}>
            <h3 className="text-2xl font-serif mb-4" style={{ color: 'var(--foreground)' }}>{product.artisanName}</h3>
            <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{product.artisanBio}</p>
            <p className="mt-4" style={{ color: 'var(--muted)' }}>
              Learn more about how your purchase supports local artisans and preserves cultural heritage.
            </p>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="section-header">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {showToast && (
        <Toast
          message="Added to cart successfully!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}

      <Footer />
    </>
  );
}
