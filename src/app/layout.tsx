import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { CarProvider } from '@/context/CarContext';
import Header from '@/components/layout/Header';

export const metadata = {
  title: 'Autos Argentina - Compra y Vende Autos',
  description: 'Plataforma de compra y venta de autos usados en Argentina',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <CarProvider>
            <Header />
            <main>{children}</main>
          </CarProvider>
        </MantineProvider>
      </body>
    </html>
  );
}