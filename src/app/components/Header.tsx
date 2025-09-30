"use client";

import { ChevronLeft, Menu } from "lucide-react";
import { ActionIcon, Group, Title, Box, useMantineTheme } from "@mantine/core";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  showMenu?: boolean;
}

export function Header({ title, showBack = false, onBack, showMenu = false }: HeaderProps) {
  const theme = useMantineTheme();
  return (
    <Box
      component="header"
      style={{
        backgroundColor: theme.colors.gray[0],
        borderBottom: `1px solid ${theme.colors.gray[3]}`,
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <Group justify="space-between">
        <Group gap="sm">
          {showBack && (
            <ActionIcon
              variant="subtle"
              size="lg"
              onClick={onBack}
              aria-label="Volver"
            >
              <ChevronLeft size={20} />
            </ActionIcon>
          )}
          <Title order={4}>{title}</Title>
        </Group>

        {showMenu && (
          <ActionIcon variant="subtle" size="lg" aria-label="Menú">
            <Menu size={20} />
          </ActionIcon>
        )}
      </Group>
    </Box>
  );
}
