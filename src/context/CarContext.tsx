'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Car, PublishFormData } from '@/types/car';
import { mockCars } from '@/lib/mockData';

interface CarContextType {
  cars: Car[];
  addCar: (carData: PublishFormData) => Car;
  getCarById: (id: string) => Car | undefined;
  getFeaturedCars: () => Car[];
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export function CarProvider({ children }: { children: ReactNode }) {
  const [cars, setCars] = useState<Car[]>(mockCars);

  const addCar = (carData: PublishFormData): Car => {
    const newCar: Car = {
      ...carData,
      id: `car-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      costs: {
        transfer: 45000,
        annualPatent: 65000,
        insurance: 120000,
      },
      rating: 0,
      reviews: 0,
      priceHistory: [],
      createdAt: new Date(),
      isFeatured: false,
    };

    setCars((prev) => [newCar, ...prev]);
    return newCar;
  };

  const getCarById = (id: string): Car | undefined => {
    return cars.find((car) => car.id === id);
  };

  const getFeaturedCars = (): Car[] => {
    return cars.slice(0, 6); // Devuelve los 6 más recientes
  };

  return (
    <CarContext.Provider value={{ cars, addCar, getCarById, getFeaturedCars }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCars() {
  const context = useContext(CarContext);
  if (context === undefined) {
    throw new Error('useCars must be used within a CarProvider');
  }
  return context;
}