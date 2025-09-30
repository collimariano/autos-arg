"use client";

import { useParams } from "next/navigation";
import { CarDetail } from "@/app/components/CarDetail";

export default function CarDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  if (!id) {
    return <p>Auto no encontrado</p>;
  }

  return <CarDetail carId={id} />;
}
