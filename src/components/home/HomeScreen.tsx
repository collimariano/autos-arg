'use client';

import { Container, Title, Text, Button, Grid, Card, Badge, Group, Stack } from '@mantine/core';
import { IconSearch, IconCar } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: string;
  fuelType: string;
  location: string;
  province: string;
  description: string;
  images: string[];
  rating?: number;
  reviews?: number;
}

export default function HomeScreen() {
  const [featuredCars, setFeaturedCars] = useState<Car[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/cars')
      .then((res) => res.json())
      .then((data) => setFeaturedCars(data))
  }, []);

  // Validación de datos
  if (!featuredCars || featuredCars.length === 0) {
    return (
      <Container size="xl" py="4rem">
        <Stack align="center" gap="md">
          <Title order={2}>No hay autos disponibles</Title>
          <Text c="dimmed">Sé el primero en publicar un auto</Text>
          <Button onClick={() => router.push('/publish')}>
            Publicar Auto
          </Button>
        </Stack>
      </Container>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '4rem 0' }}>
        <Container size="xl">
          <Stack align="center" gap="lg">
            <Title order={1} c="white" ta="center" size="3rem">
              Encontrá tu próximo auto
            </Title>
            <Text size="xl" c="white" ta="center" maw={600}>
              La plataforma más confiable para comprar y vender autos usados en Argentina
            </Text>
            <Group gap="md" mt="xl">
              <Button size="lg" leftSection={<IconSearch size={20} />} variant="white">
                Buscar Autos
              </Button>
              <Button
                size="lg"
                leftSection={<IconCar size={20} />}
                variant="outline"
                c="white"
                style={{ borderColor: 'white' }}
                onClick={() => router.push('/publish')}
              >
                Publicar mi Auto
              </Button>
            </Group>
          </Stack>
        </Container>
      </div>

      {/* Featured Cars */}
      <Container size="xl" py="4rem">
        <Title order={2} mb="xl">
          Autos Destacados
        </Title>
        
        <Grid gutter="md">
          {featuredCars.map((car) => (
            <Grid.Col key={car.id} span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ 
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '';
                }}
                onClick={() => router.push(`/cars/${car.id}`)}
              >
                <Card.Section>
                  <div style={{ 
                    height: 200, 
                    backgroundImage: `url(${car.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                </Card.Section>

                <Stack gap="xs" mt="md">
                  <Group justify="space-between" align="flex-start">
                    <Text fw={600} size="lg" lineClamp={2}>
                      {car.brand} {car.model}
                    </Text>
                    <Badge color="blue">{car.year}</Badge>
                  </Group>

                  <Text size="xl" fw={700} c="blue">
                    ${car.price}
                  </Text>

                  <Group gap="xs">
                    <Badge variant="light" color="gray">
                      {car.mileage} km
                    </Badge>
                    <Badge variant="light" color="gray">
                      {car.transmission}
                    </Badge>
                  </Group>

                  <Text size="sm" c="dimmed">
                    📍 {car.location}
                  </Text>

                  {car.rating && (
                    <Group gap="xs">
                      <Text size="sm" fw={500}>
                        ⭐ {car.rating}
                      </Text>
                      <Text size="xs" c="dimmed">
                        ({car.reviews} reseñas)
                      </Text>
                    </Group>
                  )}
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>
  );
}