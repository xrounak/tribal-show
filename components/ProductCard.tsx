import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer">
        <div className="overflow-hidden mb-4 aspect-square relative" style={{ backgroundColor: 'var(--light-bg)' }}>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium" style={{ color: 'var(--accent-green)' }}>{product.tribe}</p>
          <h3 className="font-serif text-lg transition-colors" style={{ color: 'var(--foreground)' }}>
            {product.title}
          </h3>
          <div className="flex justify-between items-center">
            <span className="font-semibold" style={{ color: 'var(--primary-brown)' }}>₹{product.price}</span>
            <span className="text-sm" style={{ color: 'var(--muted)' }}>{product.material}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
