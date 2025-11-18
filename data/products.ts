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
    title: 'Kudrum Wild Roselle Forest Pickle',
    price: 200,
    image: '/Kudurumpickle.jpg',
    category: 'Pickle',
    tribe: 'Santhal',
    material: 'Bronze',
    description: 'A tangy, earthy forest pickle handcrafted by Jharkhand’s tribal communities using wild Kudrum (Roselle). Made using a traditional recipe with mustard oil and natural spices, it carries the bold flavour of indigenous forest produce — pure, authentic and preservative-free (prototype).',
    artisanName: 'Ramesh Kumar',
    artisanBio: 'With 25 years of experience, Ramesh specializes in traditional Dokra art, keeping this ancient craft alive.',
  },
  {
    id: '2',
    title: 'Matha Gunda Forest Leaf Powder',
    price: 200,
    image: '/Mathapowder.jpg',
    category: 'Powder',
    tribe: 'Ho',
    material: 'Cotton',
    description: 'A gentle, earthy forest leaf powder made from seasonal Matha Saag — traditionally sun-dried and finely ground by Jharkhand’s tribal communities. Known for its natural mineral content and cultural significance, this powder has been used for generations in authentic tribal cuisine. Mild in flavour, rich in heritage, and crafted without any artificial colours or preservatives (prototype).',
    artisanName: 'Lakshmi Devi',
    artisanBio: 'Lakshmi carries forward her family legacy of weaving, creating stunning textiles using methods passed through generations.',
  },
  {
    id: '3',
    title: 'Mahua Energy Laddu',
    price: 250,
    image: '/Mahualaddo.jpg',
    category: 'Laddu',
    tribe: 'Oraon',
    material: 'Silver',
    description: 'A wholesome tribal superfood laddu made from sun-dried Mahua flowers, blended with jaggery, ghee and coconut. Naturally sweet, energy-boosting and rich in traditional nutrients. A nostalgic forest delicacy with authentic aroma and zero refined sugar (prototype).',
    artisanName: 'Suresh Singh',
    artisanBio: 'Suresh is a master.',
  },
  {
    id: '4',
    title: 'Kudrum Jam',
    price: 200,
    image: '/Kudurumjam.jpg',
    category: 'Jam',
    tribe: 'Munda',
    material: 'Bamboo',
    description: 'A unique fusion of wild Kudrum (Roselle) crafted into a tangy-sweet chutney/jam using traditional tribal methods. Bursting with natural Vitamin C and minerals, it brings together the sharpness of Roselle and the smoothness of a spreadable chutney. Ideal with rotis, breads, snacks, or as a flavour enhancer in meals (prototype).',
    artisanName: 'Vikram Das',
    artisanBio: 'Vikram sources .',
  },

  {
    id: '5',
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
  { name: 'Pickle', count: 15 },
  { name: 'Powder', count: 12 },
  { name: 'Jam', count: 18 },
  { name: 'Handloom', count: 20 },
  { name: 'Laddo', count: 10 },
  { name: 'Organic Forest Goods', count: 8 },
];
