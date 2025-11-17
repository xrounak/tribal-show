export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  tribe: string;
  material: string;
  description: string;
  artisanName: string;
  artisanBio: string;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Dokra Bronze Elephant',
    price: 3500,
    image: '/bronze-dokra-elephant-tribal-craft.jpg',
    category: 'Dokra',
    tribe: 'Santhal',
    material: 'Bronze',
    description: 'Exquisite Dokra brass casting depicting a majestic elephant. This ancient lost-wax casting technique creates unique, one-of-a-kind pieces.',
    artisanName: 'Ramesh Kumar',
    artisanBio: 'With 25 years of experience, Ramesh specializes in traditional Dokra art, keeping this ancient craft alive.',
  },
  {
    id: '2',
    title: 'Hand-woven Tribal Shawl',
    price: 2200,
    image: '/hand-woven-tribal-shawl-textile.jpg',
    category: 'Handloom',
    tribe: 'Ho',
    material: 'Cotton',
    description: 'Beautifully hand-woven shawl with traditional tribal patterns. Made using natural dyes and traditional looms.',
    artisanName: 'Lakshmi Devi',
    artisanBio: 'Lakshmi carries forward her family legacy of weaving, creating stunning textiles using methods passed through generations.',
  },
  {
    id: '3',
    title: 'Tribal Silver Necklace',
    price: 4800,
    image: '/tribal-silver-necklace-jewelry.jpg',
    category: 'Tribal Jewelry',
    tribe: 'Oraon',
    material: 'Silver',
    description: 'Stunning hand-crafted silver necklace featuring traditional tribal motifs. Each piece is unique and made with pure silver.',
    artisanName: 'Suresh Singh',
    artisanBio: 'Suresh is a master silversmith who combines traditional designs with contemporary sensibilities.',
  },
  {
    id: '4',
    title: 'Bamboo Basket Set',
    price: 1500,
    image: '/bamboo-basket-weaving-craft.jpg',
    category: 'Bamboo Products',
    tribe: 'Munda',
    material: 'Bamboo',
    description: 'Set of three hand-woven bamboo baskets, perfect for storage. Made using sustainable bamboo harvesting practices.',
    artisanName: 'Vikram Das',
    artisanBio: 'Vikram sources bamboo sustainably and creates beautiful, functional pieces that celebrate tribal craftsmanship.',
  },
  {
    id: '5',
    title: 'Handcrafted Wooden Statue',
    price: 2800,
    image: '/wooden-statue-tribal-carving.jpg',
    category: 'Handicrafts',
    tribe: 'Santhal',
    material: 'Wood',
    description: 'Hand-carved wooden statue depicting tribal dancers. Made from sustainably sourced wood.',
    artisanName: 'Ravi Tiwari',
    artisanBio: 'Ravi is a talented wood carver who brings stories and traditions to life through his sculptures.',
  },
  {
    id: '6',
    title: 'Organic Forest Honey',
    price: 800,
    image: '/organic-forest-honey-tribal.jpg',
    category: 'Organic Forest Goods',
    tribe: 'Kharia',
    material: 'Natural',
    description: 'Pure, raw honey collected from Jharkhand forests. No additives or processing, just natural sweetness.',
    artisanName: 'Bijay Kumar',
    artisanBio: 'Bijay works with forest communities to ethically harvest and preserve natural forest products.',
  },
];

export const categories = [
  { name: 'Handicrafts', count: 15 },
  { name: 'Dokra', count: 12 },
  { name: 'Tribal Jewelry', count: 18 },
  { name: 'Handloom', count: 20 },
  { name: 'Bamboo Products', count: 10 },
  { name: 'Organic Forest Goods', count: 8 },
];
