"use client";

import { MantineProvider } from "@mantine/core";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        colors: {
          brand: [
            "#E3F2FD",
            "#BBDEFB",
            "#90CAF9",
            "#64B5F6",
            "#42A5F5",
            "#2196F3",
            "#1E88E5",
            "#1976D2",
            "#1565C0",
            "#0D47A1",
          ],
        },
        primaryColor: "brand",
      }}
      defaultColorScheme="light"
    >
      {children}
    </MantineProvider>
  );
}
