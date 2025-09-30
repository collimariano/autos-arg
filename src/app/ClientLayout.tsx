"use client";

import { Header } from "./components/Header";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        title="Autos Market"
        showBack={false}
        showMenu={true}
        onBack={() => console.log("Back pressed")}
      />
      {children}
    </>
  );
}
