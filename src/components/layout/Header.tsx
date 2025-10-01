'use client';

import { Container, Group, Button, Text } from '@mantine/core';
import { IconCar, IconPlus } from '@tabler/icons-react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header style={{ borderBottom: '1px solid #dee2e6', padding: '1rem 0' }}>
      <Container size="xl">
        <Group justify="space-between">
          <Group
            gap="xs"
            style={{ cursor: 'pointer' }}
            onClick={() => router.push('/')}
          >
            <IconCar size={32} color="#228be6" />
            <Text size="xl" fw={700} c="blue">
              Autos Argentina
            </Text>
          </Group>

          <Group gap="md">
            {pathname !== '/' && (
              <Button variant="subtle" onClick={() => router.push('/')}>
                Inicio
              </Button>
            )}
            {pathname !== '/publish' && (
              <Button
                leftSection={<IconPlus size={18} />}
                onClick={() => router.push('/publish')}
              >
                Publicar Auto
              </Button>
            )}
          </Group>
        </Group>
      </Container>
    </header>
  );
}