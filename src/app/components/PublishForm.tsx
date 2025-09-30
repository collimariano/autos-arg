"use client";

import { useState } from "react";
import { Camera, MapPin, Phone, Check } from "lucide-react";
import {
  Button,
  TextInput,
  Select,
  Textarea,
  Card,
  Badge,
  Progress,
  Group,
  Stack,
  Title,
  Text,
  Image,
  Box,
} from "@mantine/core";

interface PublishFormProps {
  onPublish: () => void;
}

export function PublishForm({ onPublish }: PublishFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    km: "",
    price: "",
    location: "",
    description: "",
    whatsapp: "",
    photos: [] as string[],
  });

  const mockPhotos = [
    "https://images.unsplash.com/photo-1552650599-89e0f92c6dcf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1609465397944-be1ce3ebda61?auto=format&fit=crop&w=800&q=80",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddPhoto = () => {
    if (formData.photos.length < 10) {
      setFormData((prev) => ({
        ...prev,
        photos: [
          ...prev.photos,
          mockPhotos[prev.photos.length % mockPhotos.length],
        ],
      }));
    }
  };

  const handleRemovePhoto = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    onPublish();
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.brand && formData.model && formData.year && formData.km;
      case 2:
        return formData.price && formData.location && formData.description;
      case 3:
        return formData.whatsapp && formData.photos.length > 0;
      default:
        return false;
    }
  };

  return (
    <Box bg="gray.0" mih="100vh" p="md">
      {/* Progress bar */}
      <Card withBorder mb="md">
        <Group justify="space-between" mb="xs">
          <Text fz="sm">Paso {currentStep} de 3</Text>
          <Text fz="sm" c="dimmed">
            {Math.round((currentStep / 3) * 100)}%
          </Text>
        </Group>
        <Progress value={(currentStep / 3) * 100} />
      </Card>

      {/* Step 1: Basic info */}
      {currentStep === 1 && (
        <Card withBorder shadow="sm" mb="md" p="lg">
          <Title order={3} mb="md">
            Información básica
          </Title>
          <Stack>
            <Group grow>
              <Select
                label="Marca *"
                placeholder="Seleccionar marca"
                data={["Toyota", "Honda", "Ford", "Chevrolet", "Volkswagen"]}
                value={formData.brand}
                onChange={(val) => handleInputChange("brand", val || "")}
              />
              <Select
                label="Modelo *"
                placeholder="Seleccionar modelo"
                data={["Corolla", "Civic", "Focus", "Cruze"]}
                value={formData.model}
                onChange={(val) => handleInputChange("model", val || "")}
              />
            </Group>
            <Group grow>
              <Select
                label="Año *"
                placeholder="Seleccionar año"
                data={["2024", "2023", "2022", "2021", "2020"]}
                value={formData.year}
                onChange={(val) => handleInputChange("year", val || "")}
              />
              <TextInput
                label="Kilómetros *"
                placeholder="ej: 50000"
                value={formData.km}
                onChange={(e) => handleInputChange("km", e.currentTarget.value)}
              />
            </Group>
            <Select
              label="Transmisión"
              placeholder="Seleccionar transmisión"
              data={["Manual", "Automático", "CVT"]}
            />
            <Select
              label="Combustible"
              placeholder="Seleccionar combustible"
              data={["Nafta", "Diésel", "Híbrido", "Eléctrico"]}
            />
          </Stack>
        </Card>
      )}

      {/* Step 2: Price and location */}
      {currentStep === 2 && (
        <Card withBorder shadow="sm" mb="md" p="lg">
          <Title order={3} mb="md">
            Precio y ubicación
          </Title>
          <Stack>
            <TextInput
              label="Precio (ARS) *"
              placeholder="ej: 4200000"
              value={formData.price}
              onChange={(e) =>
                handleInputChange("price", e.currentTarget.value)
              }
            />
            <TextInput
              label="Ubicación *"
              placeholder="ej: Capital Federal, Zona Norte"
              leftSection={<MapPin size={16} />}
              value={formData.location}
              onChange={(e) =>
                handleInputChange("location", e.currentTarget.value)
              }
            />
            <Textarea
              label="Descripción *"
              placeholder="Describí tu auto: estado general, service, equipamiento, etc."
              minRows={4}
              value={formData.description}
              onChange={(e) =>
                handleInputChange("description", e.currentTarget.value)
              }
            />
          </Stack>
        </Card>
      )}

      {/* Step 3: Photos & contact */}
      {currentStep === 3 && (
        <Stack>
          <Card withBorder shadow="sm" mb="md" p="lg">
            <Title order={3} mb="md">
              Fotos del auto
            </Title>
            <Group gap="sm" wrap="wrap">
              {formData.photos.map((photo, i) => (
                <Box
                  key={i}
                  pos="relative"
                  w={100}
                  h={75}
                  style={{
                    border: "1px solid var(--mantine-color-gray-3)",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <Image src={photo} alt={`Foto ${i + 1}`} w="100%" h="100%" />
                  <Button
                    size="xs"
                    variant="light"
                    color="red"
                    pos="absolute"
                    top={2}
                    right={2}
                    onClick={() => handleRemovePhoto(i)}
                  >
                    ×
                  </Button>
                  {i === 0 && (
                    <Badge
                      pos="absolute"
                      bottom={2}
                      left={2}
                      variant="filled"
                      color="blue"
                    >
                      Principal
                    </Badge>
                  )}
                </Box>
              ))}
              {formData.photos.length < 10 && (
                <Button
                  variant="outline"
                  onClick={handleAddPhoto}
                  leftSection={<Camera size={16} />}
                >
                  Agregar foto
                </Button>
              )}
            </Group>
          </Card>

          <Card withBorder shadow="sm" p="lg">
            <Title order={3} mb="md">
              Información de contacto
            </Title>
            <TextInput
              label="WhatsApp *"
              placeholder="ej: 11 2345-6789"
              leftSection={<Phone size={16} />}
              value={formData.whatsapp}
              onChange={(e) =>
                handleInputChange("whatsapp", e.currentTarget.value)
              }
            />
          </Card>
        </Stack>
      )}

      {/* Navigation buttons */}
      <Group mt="lg">
        {currentStep > 1 && (
          <Button variant="default" onClick={handleBack}>
            Anterior
          </Button>
        )}
        {currentStep < 3 ? (
          <Button onClick={handleNext} disabled={!isStepValid()}>
            Siguiente
          </Button>
        ) : (
          <Button
            color="green"
            onClick={handleSubmit}
            disabled={!isStepValid()}
            leftSection={<Check size={16} />}
          >
            Publicar auto
          </Button>
        )}
      </Group>

      {currentStep === 3 && (
        <Text fz="xs" c="dimmed" ta="center" mt="md">
          Al publicar aceptás nuestros términos y condiciones
        </Text>
      )}
    </Box>
  );
}
