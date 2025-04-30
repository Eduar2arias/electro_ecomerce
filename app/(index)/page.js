'use client'
import Image from "next/image";
import './page.css';
import { useEffect, useState } from "react";
import Card from "../components/Card/card";
import { productos as data } from "../../data/productos";

export default function Home() {

  const categorias = [
    { id: 'c1', name: 'celulares' },
    { id: 'c2', name: 'computadores' },
    { id: 'c3', name: 'lavadoras' },
    { id: 'c4', name: 'neveras' },
    { id: 'c5', name: 'televisores' }]
  const [productos, setProductos] = useState(null)

  // page es el componente principal de la aplicacion, es el que se renderiza al inicio 
  // es el que se encarga de mostrar los productos y las categorias
  // el useEffect se encarga de simular una llamada a la api y cargar los productos en el estado productos
  // el estado productos se inicializa en null y se carga con los productos de la categoria celulares 
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setProductos(data['celulares']);

    }, 1000);
  }, []);
   const handleChangeCategory= (name)=>{
    setProductos(data[name]);
  }

  return (
    <div className="container-page" >
      <div className="container-categorias">
        {categorias.map((categoria) =>
          <button key={categoria.id} 
          className="btn-categoria"
          onClick={()=>handleChangeCategory(categoria.name)}
          >{categoria.name.toUpperCase()}
          </button>)}
      </div>
      <div>

        <div className="container-productos">
          {productos && productos.map((producto) => (
            <Card key={producto.id} producto={producto} />

          ))}

        </div>
      </div>
    </div>
  );
}
