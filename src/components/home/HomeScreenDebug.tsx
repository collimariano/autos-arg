'use client';

import { Container, Title, Text, Stack, Button, Code } from '@mantine/core';
import { useCars } from '@/context/CarContext';
import { useRouter } from 'next/navigation';

export default function HomeScreenDebug() {
  const router = useRouter();
  
  try {
    const { getFeaturedCars, cars } = useCars();
    const featuredCars = getFeaturedCars();

    return (
      <Container size="xl" py="4rem">
        <Stack gap="md">
          <Title>🔍 Debug Info</Title>
          
          <div>
            <Text fw={700}>Total cars:</Text>
            <Text>{cars?.length || 0}</Text>
          </div>

          <div>
            <Text fw={700}>Featured cars:</Text>
            <Text>{featuredCars?.length || 0}</Text>
          </div>

          <div>
            <Text fw={700}>Cars data:</Text>
            <Code block>{JSON.stringify(cars, null, 2)}</Code>
          </div>

          <Button onClick={() => router.push('/publish')}>
            Ir a Publicar
          </Button>
        </Stack>
      </Container>
    );
  } catch (error) {
    return (
      <Container size="xl" py="4rem">
        <Stack gap="md">
          <Title c="red">❌ Error en Context</Title>
          <Text>{String(error)}</Text>
          <Text>Verifica que CarContext esté correctamente envuelto en layout.tsx</Text>
        </Stack>
      </Container>
    );
  }
}