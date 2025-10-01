import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.car.createMany({
    data: [
      {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2022,
        price: 25000000,
        mileage: 15000,
        transmission: 'Automática',
        fuelType: 'Nafta',
        location: 'Palermo',
        province: 'CABA',
        description: 'Toyota Corolla 2022 en excelente estado. Único dueño, service oficial completo.',
        images: [
          'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
          'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800'
        ],
        features: ['ABS', 'Airbags', 'Aire acondicionado', 'Bluetooth'],
        color: 'Blanco',
        doors: 4,
      },
      {
        brand: 'Volkswagen',
        model: 'Gol Trend',
        year: 2021,
        price: 12000000,
        mileage: 35000,
        transmission: 'Manual',
        fuelType: 'Nafta',
        location: 'Rosario',
        province: 'Santa Fe',
        description: 'Volkswagen Gol Trend 2021 en muy buen estado. Ideal primer auto.',
        images: [
          'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800'
        ],
        features: ['ABS', 'Airbags', 'Dirección asistida'],
        color: 'Gris',
        doors: 5,
      },
      {
        brand: 'Ford',
        model: 'Ranger',
        year: 2023,
        price: 45000000,
        mileage: 8000,
        transmission: 'Automática',
        fuelType: 'Diesel',
        location: 'Córdoba Capital',
        province: 'Córdoba',
        description: 'Ford Ranger XLT 4x4 2023. Impecable, como nueva.',
        images: [
          'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
        ],
        features: ['ABS', 'Airbags', '4x4', 'Control de crucero'],
        color: 'Negro',
        doors: 4,
      },
      {
        brand: 'Chevrolet',
        model: 'Onix',
        year: 2022,
        price: 16000000,
        mileage: 22000,
        transmission: 'Manual',
        fuelType: 'Nafta',
        location: 'Mendoza',
        province: 'Mendoza',
        description: 'Chevrolet Onix 2022 en excelente estado. Bajo consumo.',
        images: [
          'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
        ],
        features: ['ABS', 'Airbags', 'Pantalla táctil'],
        color: 'Rojo',
        doors: 5,
      },
    ],
  });
}

main()
  .then(() => {
    console.log('✅ Seed ejecutado con éxito');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
