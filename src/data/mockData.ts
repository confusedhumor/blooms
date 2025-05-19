import { Product, ProductCategory } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Rose Bouquet',
    category: 'flowers',
    price: 299,
    description: 'A beautiful bouquet of fresh red roses, perfect for expressing your love and appreciation.',
    imageUrl: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2879824/pexels-photo-2879824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4041333/pexels-photo-4041333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: true,
    inStock: true,
    variants: [
      {
        id: 'small',
        name: 'Small (5 stems)',
        priceAdjustment: -130,
        inStock: true,
      },
      {
        id: 'medium',
        name: 'Medium (12 stems)',
        priceAdjustment: 0,
        inStock: true,
      },
      {
        id: 'large',
        name: 'Large (20 stems)',
        priceAdjustment: 291,
        inStock: true,
      },
    ],
  },
   {
    id: '13',
    name: 'Fresh Pooja flowers',
    category: 'flowers',
    price: 79,
    description: 'Mix Fresh Pooja Flowers.',
    imageUrl: 'https://imgs.search.brave.com/nPaPiPQ2JBhtMAsOt9Pnv7dz0ny__KeKxzdPGpTxsEk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Z3JvZmVycy5jb20v/Y2RuLWNnaS9pbWFn/ZS9mPWF1dG8sZml0/PXNjYWxlLWRvd24s/cT04NSxtZXRhZGF0/YT1ub25lLHc9NDgw/LGg9NDgwL2RhL2Nt/cy1hc3NldHMvY21z/L3Byb2R1Y3QvZWE5/ZmQyNzEtNDkzYS00/NzY2LTg3MmMtODE5/NGUyYTg1NGVkLmpw/Zz90cz0xNzQwMjkw/NTMz',
    gallery: [
      'https://imgs.search.brave.com/nPaPiPQ2JBhtMAsOt9Pnv7dz0ny__KeKxzdPGpTxsEk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Z3JvZmVycy5jb20v/Y2RuLWNnaS9pbWFn/ZS9mPWF1dG8sZml0/PXNjYWxlLWRvd24s/cT04NSxtZXRhZGF0/YT1ub25lLHc9NDgw/LGg9NDgwL2RhL2Nt/cy1hc3NldHMvY21z/L3Byb2R1Y3QvZWE5/ZmQyNzEtNDkzYS00/NzY2LTg3MmMtODE5/NGUyYTg1NGVkLmpw/Zz90cz0xNzQwMjkw/NTMz',
      'https://images.pexels.com/photos/2339180/pexels-photo-2339180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/9430686/pexels-photo-9430686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    newArrival: true,
    inStock: true,
  },
  {
    id: '2',
    name: 'Sunflower Delight',
    category: 'flowers',
    price: 79,
    description: 'Bright and cheerful sunflowers to bring sunshine to any space. Each sunflower is carefully selected for maximum freshness.',
    imageUrl: 'https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2339180/pexels-photo-2339180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/9430686/pexels-photo-9430686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    newArrival: true,
    inStock: true,
  },

  {
    id: '3',
    name: 'Mixed Tulip Bouquet',
    category: 'flowers',
    price: 44.99,
    description: 'A vibrant mix of colorful tulips, bringing the essence of spring to your home. Each bouquet contains a handpicked selection of seasonal varieties.',
    imageUrl: 'https://images.pexels.com/photos/1233442/pexels-photo-1233442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/1233442/pexels-photo-1233442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2258257/pexels-photo-2258257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2065135/pexels-photo-2065135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    newArrival: true,
    inStock: true,
  },
  







  //   plants
  {
    id: '4',
    name: 'Peace Lily Plant',
    category: 'plants',
    price: 34.99,
    description: 'The Peace Lily is an easy-care houseplant that brings elegance and tranquility to any space with its glossy leaves and white flowers.',
    imageUrl: 'https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/14016397/pexels-photo-14016397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: true,
    inStock: true,
    variants: [
      {
        id: 'small',
        name: 'Small (4" pot)',
        priceAdjustment: -10,
        inStock: true,
      },
      {
        id: 'medium',
        name: 'Medium (6" pot)',
        priceAdjustment: 0,
        inStock: true,
      },
      {
        id: 'large',
        name: 'Large (8" pot)',
        priceAdjustment: 15,
        inStock: true,
      },
    ],
  },
  
  
  {
    id: '5',
    name: 'Succulent Garden',
    category: 'plants',
    price: 29.99,
    description: 'A beautiful arrangement of assorted succulents in a decorative container. Low maintenance and perfect for adding a touch of green to any space.',
    imageUrl: 'https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1309770/pexels-photo-1309770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1048332/pexels-photo-1048332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: true,
    inStock: true,
  },
  {
    id: '6',
    name: 'Orchid Plant',
    category: 'plants',
    price: 59.99,
    description: 'Elegant and exotic, this orchid plant brings luxury and style to any space. Comes in a ceramic pot with care instructions.',
    imageUrl: 'https://images.pexels.com/photos/1034660/pexels-photo-1034660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/1034660/pexels-photo-1034660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4751977/pexels-photo-4751977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/342882/pexels-photo-342882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    newArrival: true,
    inStock: true,
    variants: [
      {
        id: 'pink',
        name: 'Pink Orchid',
        priceAdjustment: 0,
        inStock: true,
      },
      {
        id: 'white',
        name: 'White Orchid',
        priceAdjustment: 5,
        inStock: true,
      },
      {
        id: 'purple',
        name: 'Purple Orchid',
        priceAdjustment: 10,
        inStock: true,
      },
    ],
  },
  {
    id: '8',
    name: 'Fiddle Leaf Fig',
    category: 'plants',
    price: 79.99,
    description: 'The trendy Fiddle Leaf Fig with its large, violin-shaped leaves makes a striking statement in any room. Comes in a stylish pot.',
    imageUrl: 'https://images.pexels.com/photos/6207390/pexels-photo-6207390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/6207390/pexels-photo-6207390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6207387/pexels-photo-6207387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2949522/pexels-photo-2949522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    inStock: true,
  },
  {
    id: '10',
    name: 'Lily & Rose Bouquet',
    category: 'bouquets',
    price: 54.99,
    description: 'An elegant arrangement combining fragrant lilies and classic roses. A timeless gift for any occasion.',
    imageUrl: 'https://images.pexels.com/photos/4041333/pexels-photo-4041333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/4041333/pexels-photo-4041333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4041390/pexels-photo-4041390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4273440/pexels-photo-4273440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    newArrival: true,
    inStock: true,
  },





///bouquets

  {
    id: '7',
    name: 'Celebration Bouquet',
    category: 'bouquets',
    price: 69.99,
    description: 'A luxurious mixed bouquet featuring premium seasonal flowers in vibrant colors. Perfect for special occasions and celebrations.',
    imageUrl: 'https://images.pexels.com/photos/13851633/pexels-photo-13851633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/13851633/pexels-photo-13851633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2879824/pexels-photo-2879824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5769188/pexels-photo-5769188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: true,
    inStock: true,
  },

  
  {
    id: '9',
    name: 'Birthday Surprise Box',
    category: 'gifts',
    price: 89.99,
    description: 'A beautiful gift box containing a mini bouquet, chocolates, and a scented candle. Perfect for birthdays and special occasions.',
    imageUrl: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: true,
    newArrival: true,
    inStock: true,
  },
  
  {
    id: '11',
    name: 'Snake Plant',
    category: 'plants',
    price: 450,
    description: 'The nearly indestructible Snake Plant purifies air and thrives with minimal care. Perfect for beginners and busy plant lovers.',
    imageUrl: 'https://images.pexels.com/photos/1906439/pexels-photo-1906439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/1906439/pexels-photo-1906439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7653347/pexels-photo-7653347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/15812330/pexels-photo-15812330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    inStock: true,
  },


  // lol mujhe kab milega aisa gift
  {
    id: '12',
    name: 'Luxury Flower Box',
    category: 'gifts',
    price: 1999,
    description: 'Exquisite roses arranged in a luxury keepsake box. Available in various colors, this premium gift will impress any recipient.',
    imageUrl: 'https://images.pexels.com/photos/6891653/pexels-photo-6891653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/6891653/pexels-photo-6891653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7280468/pexels-photo-7280468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/11650578/pexels-photo-11650578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    featured: true,
    inStock: true,
    variants: [
      {
        id: 'red',
        name: 'Red Roses',
        priceAdjustment: 0,
        inStock: true,
      },
      {
        id: 'pink',
        name: 'Pink Roses',
        priceAdjustment: 0,
        inStock: true,
      },
      {
        id: 'white',
        name: 'White Roses',
        priceAdjustment: 10,
        inStock: true,
      },
    ],
  },
];

export const categories: { id: ProductCategory; name: string; image: string }[] = [
  {
    id: 'flowers',
    name: 'Fresh Flowers',
    image: 'https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'plants',
    name: 'Indoor Plants',
    image: 'https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'bouquets',
    name: 'Bouquets',
    image: 'https://images.pexels.com/photos/6891631/pexels-photo-6891631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'gifts',
    name: 'Gift Boxes',
    image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];