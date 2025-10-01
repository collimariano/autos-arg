"use client";

import { Card, Image, Text, Group, Stack, Badge, ActionIcon } from "@mantine/core";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

type Car = {
  id: string;
  title: string;
  price: string;
  year: number;
  km: string;
  location: string;
  image: string;
  transmission: string;
};

interface CarCardProps {
  car: Car;
  showFavorite?: boolean;
}

export default function CarCard({ car, showFavorite }: CarCardProps) {
  const router = useRouter();

  return (
    <Card
      shadow="sm"
      padding="md"
      radius="md"
      withBorder
      style={{ cursor: "pointer" }}
      onClick={() => router.push(`/cars/${car.id}`)}
    >
      <Card.Section>
        <Image src={car.image} alt={car.title} height={160} fit="cover" />
      </Card.Section>

      {showFavorite && (
        <ActionIcon
          variant="light"
          color="red"
          radius="xl"
          size="md"
          pos="absolute"
          top={10}
          right={10}
          onClick={(e) => {
            e.stopPropagation();
            console.log("favorite clicked:", car.id);
          }}
        >
          <Heart size={16} />
        </ActionIcon>
      )}

      <Stack gap="xs" mt="sm">
        <Text fw={500}>{car.title}</Text>
        <Text c="blue" fw={700}>
          ${car.price}
        </Text>
        <Group gap="xs" c="dimmed" fz="sm">
          <span>{car.year}</span> • <span>{car.km} km</span> •{" "}
          <span>{car.transmission}</span>
        </Group>
        <Text fz="sm" c="dimmed">
          {car.location}
        </Text>
      </Stack>
    </Card>
  );
}
