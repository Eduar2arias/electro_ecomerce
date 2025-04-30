"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import './detalle-id.css'
import { useEffect, useState } from 'react';
import { productos } from '@/data/productos';

export default function DetalleId( { params }) {
    const searchParams = useSearchParams()
    const cateogira = searchParams.get('categoria')
    const [ producto , setProducto ] = useState([])
    const [ descipcion , setDescripcion ] = useState("")
    const router = useRouter();

    useEffect(() => {
 
      if (productos[cateogira]) {
        const productoFiltrado = productos[cateogira].find((producto) => producto.id === params.id)

        setProducto(productoFiltrado)
      }

      _handlDescripcion()

    }, [])
    // const { id } = useParams(

   function _handlDescripcion(){
    switch (cateogira) {
      case 'celulares':
        setDescripcion("Disfruta de un diseño moderno y un rendimiento potente con este smartphone de última generación. Gracias a su amplia pantalla, experimentarás una visualización envolvente ideal para contenido multimedia, juegos o trabajo. Su generosa capacidad de almacenamiento te permite guardar tus archivos, fotos y aplicaciones sin preocuparte por el espacio. Además, su batería de larga duración y cámara de alta resolución hacen que esté siempre listo para acompañarte en cualquier momento. Ideal para quienes buscan estilo, eficiencia y confiabilidad.");        
        break;
      case 'computadores':
        setDescripcion("Potencia y versatilidad en un solo dispositivo. Este computador de última generación combina un diseño elegante con un rendimiento excepcional, ideal para tareas cotidianas, trabajo profesional o entretenimiento. Con su pantalla de alta definición y gráficos impresionantes, disfrutarás de una experiencia visual envolvente. Su capacidad de almacenamiento y memoria RAM garantizan un funcionamiento fluido y rápido, permitiéndote realizar múltiples tareas sin esfuerzo. Perfecto para quienes buscan eficiencia y estilo en su equipo de trabajo.");
        break;
      case 'lavadoras':
        setDescripcion("La lavadora de carga frontal es la solución perfecta para quienes buscan eficiencia y cuidado de la ropa. Con su tecnología avanzada, ofrece ciclos de lavado personalizados que se adaptan a diferentes tipos de tejidos, garantizando una limpieza profunda");
        break;  
      case 'neveras':
        setDescripcion("La nevera de última generación combina diseño moderno y eficiencia energética. Con amplios compartimentos y tecnología avanzada, mantiene tus alimentos frescos por más tiempo. Ideal para quienes buscan calidad y estilo en su cocina.");
        break;
      case 'televisores':
        setDescripcion("Sumérgete en una experiencia visual inigualable con nuestro televisor de última generación. Con tecnología 4K y HDR, disfrutarás de colores vibrantes y detalles impresionantes en cada escena. Su diseño delgado y elegante se adapta perfectamente a cualquier espacio, convirtiéndolo en el centro de atención de tu hogar. Ideal para cinéfilos y amantes de los deportes, este televisor ofrece una calidad de imagen excepcional y un sonido envolvente que transformará tu forma de ver televisión.");
        break;
    
      default:
        break;
    }
    } 
    
    // esta vista recibe un id y lo busca en el array de productos, si lo encuentra lo muestra en la vista
    return(
        <div className="card-detalle">
        <img src={producto.img} alt="Celular Samsung Galaxy" />
        <h2>{producto.name}</h2>
        <p className="card-description">
          {descipcion}
        </p>
        <div className="precio">{producto.price}</div>
        <button onClick={ ()=> router.push('/')}>Regresar</button>
      </div>
    )
}