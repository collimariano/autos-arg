"use client";

import {
  Container,
  Title,
  Text,
  Grid,
  Select,
  TextInput,
  Button,
  Card,
  Image,
  Group,
} from "@mantine/core";

interface HomeScreenProps {
  onSearch: () => void;
  onPublish: () => void;
  onCarClick: (carId: string) => void;
}

export function HomeScreen({ onSearch, onPublish, onCarClick }: HomeScreenProps) {
  const featuredCars = [
    {
      id: "1",
      title: "Toyota Corolla 1.8 XEi CVT",
      price: "4.200.000",
      year: 2022,
      km: "25.000",
      location: "Capital Federal",
      image:
        "https://images.unsplash.com/photo-1552650599-89e0f92c6dcf?auto=format&fit=crop&w=800&q=80",
      transmission: "CVT",
    },
    {
      id: "2",
      title: "Honda CR-V 1.5 Turbo AWD",
      price: "7.800.000",
      year: 2023,
      km: "15.000",
      location: "Zona Norte",
      image:
        "https://images.unsplash.com/photo-1615836494670-706aa6af4974?auto=format&fit=crop&w=800&q=80",
      transmission: "CVT",
    },
    {
      id: "3",
      title: "Volkswagen Golf 1.4 TSI Highline",
      price: "3.900.000",
      year: 2021,
      km: "42.000",
      location: "Zona Oeste",
      image:
        "https://images.unsplash.com/photo-1748214547184-d994bfe53322?auto=format&fit=crop&w=800&q=80",
      transmission: "Manual",
    },
  ];

  return (
    <Container size="lg" py="xl">
      {/* Hero */}
      <Title order={2} mb="xs" ta="center">
        Encontrá tu auto ideal
      </Title>
      <Text c="dimmed" ta="center" mb="xl">
        Miles de autos usados y 0km en toda Argentina
      </Text>

      {/* Search form */}
      <Grid gutter="md">
        <Grid.Col span={6}>
          <Select
            label="Marca"
            placeholder="Seleccionar"
            data={["Toyota", "Honda", "Ford", "Chevrolet", "Volkswagen"]}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Select
            label="Modelo"
            placeholder="Seleccionar"
            data={["Corolla", "Civic", "Focus", "Cruze"]}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Select
            label="Año desde"
            placeholder="Seleccionar"
            data={["2020", "2019", "2018", "2017"]}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Select
            label="Hasta $"
            placeholder="Seleccionar"
            data={["2.000.000", "5.000.000", "10.000.000", "20.000.000"]}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput placeholder="Ubicación (ej: Capital Federal)" />
        </Grid.Col>
        <Grid.Col span={12}>
          <Button fullWidth color="blue" onClick={onSearch}>
            Buscar autos
          </Button>
        </Grid.Col>
      </Grid>

      {/* Publish button */}
      <Button
        fullWidth
        mt="lg"
        color="green"
        onClick={onPublish}
        size="md"
      >
        Publicar tu auto
      </Button>

      {/* Featured cars */}
      <Title order={3} mt="xl" mb="md">
        Autos destacados
      </Title>
      <Grid>
        {featuredCars.map((car) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={car.id}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              onClick={() => onCarClick(car.id)}
              style={{ cursor: "pointer" }}
            >
              <Card.Section>
                <Image src={car.image} alt={car.title} height={160} />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{car.title}</Text>
                <Text fw={700} c="blue">
                  ${car.price}
                </Text>
              </Group>

              <Text size="sm" c="dimmed">
                {car.year} • {car.km} km • {car.transmission}
              </Text>
              <Text size="sm" c="dimmed">
                {car.location}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
