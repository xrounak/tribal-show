'use client';

export default function Footer() {
  return (
    <footer className="border-t py-12 mt-20" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif mb-4" style={{ color: 'var(--primary-brown)' }}>Tribals</h3>
            <p style={{ color: 'var(--muted)' }}>
              Celebrating the authentic craftsmanship of Jharkhand's tribal artisans.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Shop</h4>
            <ul className="space-y-2" style={{ color: 'var(--muted)' }}>
              <li><a href="/products" className="hover:opacity-80 transition-opacity">All Products</a></li>
              <li><a href="/products?category=Handicrafts" className="hover:opacity-80 transition-opacity">Handicrafts</a></li>
              <li><a href="/products?category=Dokra" className="hover:opacity-80 transition-opacity">Dokra Art</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>About</h4>
            <ul className="space-y-2" style={{ color: 'var(--muted)' }}>
              <li><a href="/about" className="hover:opacity-80 transition-opacity">Our Story</a></li>
              <li><a href="/contact" className="hover:opacity-80 transition-opacity">Contact</a></li>
              <li><a href="/" className="hover:opacity-80 transition-opacity">Support Artisans</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Connect</h4>
            <ul className="space-y-2" style={{ color: 'var(--muted)' }}>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Instagram</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Facebook</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex justify-between items-center" style={{ borderColor: 'var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            © 2025 Tribals. Celebrating Jharkhand's tribal heritage.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--muted)' }}>Privacy</a>
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--muted)' }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
