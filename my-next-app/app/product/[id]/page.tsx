'use client';

import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const { id } = useParams();
  const productId = id;
  return <div>Details about product {productId} </div>;
}
