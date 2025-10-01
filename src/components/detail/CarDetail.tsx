'use client';

import {
  Container,
  Title,
  Text,
  Badge,
  Group,
  Stack,
  Grid,
  Paper,
  Button,
  Divider,
} from '@mantine/core';
import {
  IconArrowLeft,
  IconManualGearbox,
  IconGasStation,
  IconMapPin,
  IconCar,
  IconDoor,
  IconPalette,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import ImageGallery from './ImageGallery';
import type { Car } from '@prisma/client';

interface CarDetailProps {
  car: Car;
}

export default function CarDetail({ car }: CarDetailProps) {
  const router = useRouter();

  if (!car) {
    return (
      <Container size="xl" py="4rem">
        <Stack align="center" gap="md">
          <Title order={2}>Auto no encontrado</Title>
          <Button leftSection={<IconArrowLeft size={18} />} onClick={() => router.push('/')}>
            Volver al inicio
          </Button>
        </Stack>
      </Container>
    );
  }

  return (
    <Container size="xl" py="2rem">
      <Button
        variant="subtle"
        leftSection={<IconArrowLeft size={18} />}
        onClick={() => router.push('/')}
        mb="xl"
      >
        Volver
      </Button>

      <Grid gutter="xl">
        {/* Galería de Imágenes */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <ImageGallery images={car.images} />
        </Grid.Col>

        {/* Información Principal */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper shadow="sm" p="lg" radius="md" withBorder>
            <Stack gap="md">
              <div>
                <Group justify="space-between" mb="xs" align="flex-start">
                  <Title order={2} style={{ flex: 1 }}>
                    {car.brand} {car.model}
                  </Title>
                  <Badge size="lg" color="blue">
                    {car.year}
                  </Badge>
                </Group>
              </div>

              <div>
                <Text size="sm" c="dimmed" mb={4}>
                  Precio
                </Text>
                <Title order={1} c="blue">
                  ${car.price.toLocaleString('es-AR')}
                </Title>
              </div>

              <Button size="lg" fullWidth>
                Contactar al Vendedor
              </Button>

              <Divider />

              <Stack gap="xs">
                <Text fw={600} size="sm" c="dimmed">
                  ESPECIFICACIONES
                </Text>
                <Group gap="xs">
                  <IconCar size={20} color="gray" />
                  <Text size="sm">
                    <strong>{car.mileage.toLocaleString('es-AR')}</strong> km
                  </Text>
                </Group>
                <Group gap="xs">
                  <IconManualGearbox size={20} color="gray" />
                  <Text size="sm">{car.transmission}</Text>
                </Group>
                <Group gap="xs">
                  <IconGasStation size={20} color="gray" />
                  <Text size="sm">{car.fuelType}</Text>
                </Group>
                <Group gap="xs">
                  <IconDoor size={20} color="gray" />
                  <Text size="sm">{car.doors} puertas</Text>
                </Group>
                <Group gap="xs">
                  <IconPalette size={20} color="gray" />
                  <Text size="sm">{car.color}</Text>
                </Group>
                <Group gap="xs">
                  <IconMapPin size={20} color="gray" />
                  <Text size="sm">
                    {car.location}, {car.province}
                  </Text>
                </Group>
              </Stack>
            </Stack>
          </Paper>
        </Grid.Col>

        {/* Descripción */}
        <Grid.Col span={12}>
          <Paper shadow="sm" p="lg" radius="md" withBorder>
            <Title order={3} mb="md">
              Descripción
            </Title>
            <Text>{car.description}</Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
