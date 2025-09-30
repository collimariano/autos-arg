"use client";

import { useState } from "react";
import {
  ChevronLeft, ChevronRight, MapPin, MessageCircle
} from "lucide-react";
import {
  Card, Button, Badge, Image,
  Group, Stack, Text, Title, Box
} from "@mantine/core";
import { mockCars } from "../data/mockCars";

interface CarDetailProps {
  carId: string;
}

export function CarDetail({ carId }: CarDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const car = mockCars.find((c) => c.id === carId);
  if (!car) return <Text>No se encontró el auto</Text>;

  const nextImage = () => setCurrentImageIndex((i) => (i + 1) % car.images.length);
  const prevImage = () => setCurrentImageIndex((i) => (i - 1 + car.images.length) % car.images.length);

  const handleWhatsAppContact = () => {
    const message = `Hola! Me interesa el ${car.title} publicado por $${car.price}. ¿Podemos coordinar una visita?`;
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box bg="gray.0" mih="100vh">
      {/* --- Imagen principal + navegación --- */}
      <Box pos="relative">
        <Image src={car.images[currentImageIndex]} alt={car.title} h={300} fit="cover" radius="sm" />
        <Button variant="default" size="xs" pos="absolute" top="50%" left="8px" onClick={prevImage}>
          <ChevronLeft size={18} />
        </Button>
        <Button variant="default" size="xs" pos="absolute" top="50%" right="8px" onClick={nextImage}>
          <ChevronRight size={18} />
        </Button>
        <Badge pos="absolute" bottom="8px" right="8px" variant="filled" color="dark">
          {currentImageIndex + 1} / {car.images.length}
        </Badge>
      </Box>

      {/* --- Info del auto (igual que antes) --- */}
      <Card shadow="sm" p="md" m="md">
        <Group justify="space-between" mb="sm">
          <Title order={3}>{car.title}</Title>
          <Stack gap={0} ta="right">
            <Text fw={700} c="blue" fz="xl">${car.price}</Text>
            {car.originalPrice && (
              <Text fz="sm" td="line-through" c="dimmed">${car.originalPrice}</Text>
            )}
          </Stack>
        </Group>
        <Text fz="sm" c="dimmed">{car.year} • {car.km} km • {car.specs.transmission}</Text>
        <Group gap={4} c="dimmed" fz="sm"><MapPin size={16} /> {car.location}</Group>
        <Button fullWidth color="green" mt="md" leftSection={<MessageCircle size={16} />} onClick={handleWhatsAppContact}>
          Contactar por WhatsApp
        </Button>
      </Card>
    </Box>
  );
}
