"use client"
import { useSearchParams } from 'next/navigation';
import './detalle-id.css'
import { useEffect, useState } from 'react';
import { productos } from '@/app/data/productos';

export default function DetalleId( { params }) {
    const searchParams = useSearchParams()
    const cateogira = searchParams.get('categoria')
    const [ producto , setProducto ] = useState([])

    useEffect(() => {
      console.log('useEffect detalle id');
      console.log('data', productos[cateogira]);
      if (productos[cateogira]) {
        const productoFiltrado = productos[cateogira].find((producto) => producto.id === params.id)
        console.log('productoFiltrado', productoFiltrado);
        setProducto(productoFiltrado)
      }
      
      

    }, [])
    // const { id } = useParams(
    
    
    return(
        <div className="card-detalle">
        <img src={producto.img} alt="Celular Samsung Galaxy" />
        <h2>{producto.name}</h2>
        <p>
          Potente smartphone con cámara de 64 MP, 8 GB de RAM y pantalla AMOLED de 6.2".
        </p>
        <div className="precio">{producto.price}</div>
        {/* <button>Agregar al carrito</button> */}
      </div>
    )
}