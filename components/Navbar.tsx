'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-accent-light bg-background sticky top-0 z-50" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
<img
  src="/tribal.jpg"
  className="h-12 w-auto object-contain"
/>

        <Link href="/" className="text-3xl font-serif" style={{ color: 'var(--primary-brown)' }}>
          Tribals Taste
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="transition-colors" style={{ color: 'var(--foreground)', '--tw-text-opacity': '1' } as any}>
            Home
          </Link>
          <Link href="/products" className="transition-colors" style={{ color: 'var(--foreground)' }}>
            Products
          </Link>
          <Link href="/about" className="transition-colors" style={{ color: 'var(--foreground)' }}>
            About
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <Link href="/auth/login" className="transition-colors" style={{ color: 'var(--foreground)' }}>
            Sign In
          </Link>
          <Link href="/cart" className="relative flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10 0a2 2 0 1 1-4 0m4 0a2 2 0 1 1-4 0m4 0H5.4m0 0L3.9 4" />
            </svg>
            {state.items.length > 0 && (
              <span className="absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center" style={{ backgroundColor: 'var(--primary-orange)' }}>
                {state.items.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: 'var(--foreground)' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4" style={{ borderColor: 'var(--border)' }}>
          <Link href="/" className="block transition-colors" style={{ color: 'var(--foreground)' }}>
            Home
          </Link>
          <Link href="/products" className="block transition-colors" style={{ color: 'var(--foreground)' }}>
            Products
          </Link>
          <Link href="/about" className="block transition-colors" style={{ color: 'var(--foreground)' }}>
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
