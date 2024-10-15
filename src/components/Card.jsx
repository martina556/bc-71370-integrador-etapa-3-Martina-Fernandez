import { useContext } from 'react';
import './Card.scss'
import CarritoContext from '../context/CarritoContext.jsx';

// eslint-disable-next-line react/prop-types
const Card = ({ producto }) => {

  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)

  const handleAgregar = (producto) => {
    console.log('Agregando el producto al carrito...')
    agregarProductoAlCarritoContext(producto)
  }

  return (
    <div className='card'>
    <article className='card__article'>
      <div className='card__image-container'>
        <img src={producto.foto} alt={producto.name} className='card__image' />
      </div>
      <div className='card__content'>
        <h2 className='card__heading'>{producto.name}</h2>
        <div className='card__description'>
          <p>
          {producto.description}
          </p>
        </div>
        <div className='button-card'>
         <button className='button-card-carrito'onClick={() => handleAgregar(producto)}>Agregar</button>  
        </div>
        
      </div>
    </article>
  </div>
  )
}

export default Card