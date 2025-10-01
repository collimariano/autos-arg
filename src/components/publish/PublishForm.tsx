'use client';

import { useState } from 'react';
import {
  Container,
  Title,
  Paper,
  TextInput,
  NumberInput,
  Select,
  Textarea,
  Button,
  Group,
  Stack,
  MultiSelect,
  Grid,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { BRANDS, PROVINCES } from '@/types/car';
import { notifications } from '@mantine/notifications';

const FEATURES_OPTIONS = [
  'ABS',
  'Airbags',
  'Aire acondicionado',
  'Cierre centralizado',
  'Bluetooth',
  'Cámara trasera',
  'Control de crucero',
  'Asientos de cuero',
  'Techo solar',
  'Sensores de estacionamiento',
  'GPS',
  '4x4',
];

export default function PublishForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    mileage: 0,
    transmission: 'Manual' as 'Manual' | 'Automática',
    fuelType: 'Nafta' as any,
    location: '',
    province: '',
    description: '',
    color: '',
    doors: 4,
    features: [] as string[],
    images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones básicas
    if (!formData.brand || !formData.model || !formData.province) {
      notifications.show({ color: 'red', message: 'Por favor completa todos los campos obligatorios' });
      return;
    }

    if (formData.price <= 0 || formData.mileage < 0) {
      notifications.show({ color: 'red', message: 'El precio y kilometraje deben ser válidos' });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/cars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Error al publicar auto');

      const newCar = await res.json();

      notifications.show({ color: 'green', message: 'Auto publicado con éxito 🚗' });

      router.push(`/cars/${newCar.id}`);
    } catch (err) {
      console.error(err);
      notifications.show({ color: 'red', message: 'Error al publicar auto' });
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container size="md" py="4rem">
      <Title order={1} mb="xl" ta="center">
        Publicar mi Auto
      </Title>

      <Paper shadow="sm" p="xl" radius="md" withBorder>
        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            <Grid gutter="md">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Select
                  label="Marca"
                  placeholder="Selecciona la marca"
                  data={[...BRANDS]}
                  value={formData.brand}
                  onChange={(value) => setFormData({ ...formData, brand: value || '' })}
                  required
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="Modelo"
                  placeholder="Ej: Corolla, Gol, Ranger"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  required
                />
              </Grid.Col>
            </Grid>

            <Grid gutter="md">
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <NumberInput
                  label="Año"
                  placeholder="2022"
                  min={1990}
                  max={new Date().getFullYear() + 1}
                  value={formData.year}
                  onChange={(value) => setFormData({ ...formData, year: Number(value) })}
                  required
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <NumberInput
                  label="Precio (ARS)"
                  placeholder="15000000"
                  min={0}
                  hideControls
                  value={formData.price}
                  onChange={(value) => setFormData({ ...formData, price: Number(value) })}
                  required
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <NumberInput
                  label="Kilometraje"
                  placeholder="50000"
                  min={0}
                  value={formData.mileage}
                  onChange={(value) => setFormData({ ...formData, mileage: Number(value) })}
                  required
                />
              </Grid.Col>
            </Grid>

            <Grid gutter="md">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Select
                  label="Transmisión"
                  data={['Manual', 'Automática']}
                  value={formData.transmission}
                  onChange={(value) =>
                    setFormData({ ...formData, transmission: value as any })
                  }
                  required
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Select
                  label="Combustible"
                  data={['Nafta', 'Diesel', 'Eléctrico', 'Híbrido', 'GNC']}
                  value={formData.fuelType}
                  onChange={(value) => setFormData({ ...formData, fuelType: value as any })}
                  required
                />
              </Grid.Col>
            </Grid>

            <Grid gutter="md">
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <TextInput
                  label="Color"
                  placeholder="Blanco"
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  required
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <NumberInput
                  label="Puertas"
                  min={2}
                  max={5}
                  value={formData.doors}
                  onChange={(value) => setFormData({ ...formData, doors: Number(value) })}
                  required
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <Select
                  label="Provincia"
                  placeholder="Selecciona"
                  data={[...PROVINCES]}
                  value={formData.province}
                  onChange={(value) => setFormData({ ...formData, province: value || '' })}
                  required
                  searchable
                />
              </Grid.Col>
            </Grid>

            <TextInput
              label="Localidad"
              placeholder="Ej: Palermo, Rosario Centro"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />

            <MultiSelect
              label="Características"
              placeholder="Selecciona las características del auto"
              data={FEATURES_OPTIONS}
              value={formData.features}
              onChange={(value) => setFormData({ ...formData, features: value })}
              searchable
            />

            <Textarea
              label="Descripción"
              placeholder="Describe el estado del auto, historial, etc."
              minRows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />

            <Group justify="flex-end" mt="xl">
              <Button variant="subtle" onClick={() => router.push('/')}>
                Cancelar
              </Button>
              <Button type="submit" loading={loading} size="md">
                Publicar Auto
              </Button>
            </Group>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}