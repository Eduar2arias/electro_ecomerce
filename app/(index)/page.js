'use client'
import Image from "next/image";
import './page.css';
import { useEffect, useState } from "react";

const products = {
  calulares: [
    { id: 'p1', name: 'samsung', price: 100 ,img: 'sdfs'},
    { id: 'p2', name: 'xiaomi', price: 200 },
    { id: 'p3', name: 'iphone', price: 300 },
    { id: 'p4', name: 'huawei', price: 400 },
    { id: 'p5', name: 'motorola', price: 500 }
  ],
  computadores: [
    { id: 'p6', name: 'samsung', price: 100 },
    { id: 'p7', name: 'xiaomi', price: 200 },
    { id: 'p8', name: 'iphone', price: 300 },
    { id: 'p9', name: 'huawei', price: 400 },
    { id: 'p10', name: 'motorola', price: 500 }
  ],
}

export default function Home() {

  const categorias = [
    { id: 'c1', name: 'celulares' },
    { id: 'c2', name: 'computadores' },
    { id: 'c3', name: 'lavadoras' },
    { id: 'c4', name: 'neveras' },
    { id: 'c5', name: 'televisores' }]
  const [productos, setProductos] = useState(null)

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setProductos(products['calulares']);
      console.log('productos', products['calulares']);

    }, 1000);
  }, []);

  return (
    <div className="container-page" style={{ 'color': 'red', 'backgroundColor': 'yellow' }}>
      <div className="container-categorias">
        {categorias.map((categoria) => <button key={categoria.id} className="btn-categoria">{categoria.name.toUpperCase()}</button>)}
      </div>
      <div>
        <div style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-around', 'alignItems': 'center', 'flexWrap': 'wrap' }}>
        {productos && productos.map((producto) => (
        <div className="contianer-card" style={{'width':'300px', 'height':'300px','border':'1px solid black'}}>
          <div className="container-img">
            <img alt="imagen" style={{'width':'200px', 'height':'200px'}} />
          </div>
          <div className="container-text">
            <p>titulo: {producto.name}</p>
            <p>precio: {producto.price}</p>
          </div>
        </div>

        ))}

        </div>
      </div>
    </div>
  );
}
