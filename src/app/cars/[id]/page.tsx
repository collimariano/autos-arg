// import CarDetail from '@/components/detail/CarDetail';

// export default async function CarDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   return <CarDetail carId={id} />;
// }

import CarDetail from '@/components/detail/CarDetail';

export default async function CarDetailPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cars/${params.id}`, {
    cache: 'no-store', // para evitar que quede cacheado
  });


  const car = await res.json();

  return <CarDetail car={car} />;
}
