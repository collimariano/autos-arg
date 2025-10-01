export interface Car {
  id: string;
  title: string;
  price: number;
  originalPrice?: string;
  year: number;
  km: string;
  location: string;
  seller: string;
  description: string;
  images: string[];
  specs: {
    transmission: string;
    fuel: string;
    doors: string;
    color: string;
  };
  costs: {
    transfer: number;
    annualPatent: number;
    insurance: number;
  };
  rating: number;
  reviews: number;
  priceHistory: number[];
  createdAt?: Date;
  isFeatured?: boolean;
}

export interface PublishFormData {
  title: string;
  price: string;
  year: number;
  km: string;
  location: string;
  seller: string;
  description: string;
  images: string[];
  specs: {
    transmission: string;
    fuel: string;
    doors: string;
    color: string;
  };
}

export const PROVINCES = [
  'Buenos Aires',
  'CABA',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucumán',
] as const;

export const BRANDS = [
  'Chevrolet',
  'Ford',
  'Volkswagen',
  'Fiat',
  'Toyota',
  'Honda',
  'Nissan',
  'Renault',
  'Peugeot',
  'Citroën',
  'Mercedes-Benz',
  'BMW',
  'Audi',
  'Hyundai',
  'Kia',
  'Jeep',
  'RAM',
] as const;