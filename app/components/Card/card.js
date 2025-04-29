"use client";
import Link from 'next/link';
// import style from './card.module.css';
import './card.css';
import { useRouter } from 'next/navigation';
export default function Card({ producto }) {
  const { id, name, price, img , categoria} = producto;
  const router = useRouter();
  return (
    // este componente es un card que recibe un producto y lo muestra en una tarjeta
    // el card tiene una imagen, un nombre y un precio

    <div className="card" onClick={() => router.push(`/detalle/${id}?categoria=${categoria}`)
    }>
      <img src={img} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">Precio : {price}</p>
        {/* <button className="card-button">{buttonText}</button> */}
        <Link href="/detalle">detalle</Link>
      </div>
    </div>

  )
}