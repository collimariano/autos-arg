'use client';

import { useState } from 'react';
import { Paper, Group, ActionIcon } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Paper shadow="sm" radius="md" withBorder overflow="hidden">
      {/* Imagen Principal */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            height: 500,
            backgroundImage: `url(${images[selectedImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Controles de Navegación */}
        {images.length > 1 && (
          <>
            <ActionIcon
              size="xl"
              radius="xl"
              variant="filled"
              style={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              onClick={goToPrevious}
            >
              <IconChevronLeft size={24} />
            </ActionIcon>
            <ActionIcon
              size="xl"
              radius="xl"
              variant="filled"
              style={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              onClick={goToNext}
            >
              <IconChevronRight size={24} />
            </ActionIcon>

            {/* Indicador de posición */}
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: 16,
                fontSize: 14,
              }}
            >
              {selectedImage + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <Group gap="xs" p="md" justify="center">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              style={{
                width: 80,
                height: 60,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 8,
                cursor: 'pointer',
                border: selectedImage === index ? '3px solid #228be6' : '2px solid #dee2e6',
                transition: 'all 0.2s',
                opacity: selectedImage === index ? 1 : 0.6,
              }}
              onMouseEnter={(e) => {
                if (selectedImage !== index) {
                  e.currentTarget.style.opacity = '0.8';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedImage !== index) {
                  e.currentTarget.style.opacity = '0.6';
                }
              }}
            />
          ))}
        </Group>
      )}
    </Paper>
  );
}