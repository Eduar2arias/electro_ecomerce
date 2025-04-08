"use client";
// import style from './card.module.css';
import './card.css';
export default function Card({ producto }) {
  const { id, name, price, img } = producto;
  return (
    // <div className="contianer-card" style={{'width':'300px', 'height':'300px','border':'1px solid black'}}>
    //   <div className="container-img">
    //     <img alt="imagen" style={{'width':'200px', 'height':'200px'}} />
    //   </div>
    //   <div className="container-text">
    //     <p>titulo: {producto.name}</p>
    //     <p>precio: {producto.price}</p>
    //   </div>
    // </div>

    <div className="card">
      <img src={img} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{price}</p>
        {/* <button className="card-button">{buttonText}</button> */}
      </div>
    </div>

  )
}