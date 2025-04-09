"use client";
// import style from './card.module.css';
import './card.css';
export default function Card({ producto }) {
  const { id, name, price, img } = producto;
  return (
    // este componente es un card que recibe un producto y lo muestra en una tarjeta
    // el card tiene una imagen, un nombre y un precio

    <div className="card">
      <img src={img} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">Precio : {price}</p>
        {/* <button className="card-button">{buttonText}</button> */}
      </div>
    </div>

  )
}