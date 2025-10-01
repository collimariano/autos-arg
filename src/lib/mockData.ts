import { Car } from '@/types/car';

export const mockCars: Car[] = [
  {
    id: '1',
    title: 'Toyota Corolla 1.8 XEi CVT',
    price: 25000000,
    originalPrice: '27000000',
    year: 2022,
    km: '15000',
    location: 'Palermo, CABA',
    seller: 'Particular',
    description: 'Toyota Corolla 2022 en excelente estado. Único dueño, service oficial completo.',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
    ],
    specs: {
      transmission: 'Automática',
      fuel: 'Nafta',
      doors: '4',
      color: 'Blanco',
    },
    costs: {
      transfer: 45000,
      annualPatent: 68000,
      insurance: 125000,
    },
    rating: 4.3,
    reviews: 127,
    priceHistory: [27000000, 26000000, 25000000],
    createdAt: new Date('2024-09-15'),
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Volkswagen Gol Trend',
    price: 12000000,
    year: 2021,
    km: '35000',
    location: 'Rosario, Santa Fe',
    seller: 'Particular',
    description: 'Volkswagen Gol Trend 2021 en muy buen estado. Ideal primer auto.',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
    ],
    specs: {
      transmission: 'Manual',
      fuel: 'Nafta',
      doors: '5',
      color: 'Gris',
    },
    costs: {
      transfer: 40000,
      annualPatent: 55000,
      insurance: 100000,
    },
    rating: 4.0,
    reviews: 90,
    priceHistory: [12500000, 12300000, 12000000],
    createdAt: new Date('2024-09-20'),
    isFeatured: true,
  },
];
