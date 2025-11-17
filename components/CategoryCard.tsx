import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  image: string;
  count: number;
}

export default function CategoryCard({ name, image, count }: CategoryCardProps) {
  return (
    <Link href={`/products?category=${name}`}>
      <div className="group cursor-pointer">
        <div className="overflow-hidden mb-4 aspect-square relative" style={{ backgroundColor: 'var(--light-bg)' }}>
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="font-serif text-lg transition-colors" style={{ color: 'var(--foreground)' }}>
          {name}
        </h3>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>{count} items</p>
      </div>
    </Link>
  );
}
