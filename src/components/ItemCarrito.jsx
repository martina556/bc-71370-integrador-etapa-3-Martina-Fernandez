import { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'

const ItemCarrito = ({producto}) => {

    const { eliminarProductoDelCarritoContext } = useContext(CarritoContext)

    const handleEliminar = (id) => {
        console.log('Eliminando el producto...', id)
        eliminarProductoDelCarritoContext(id)
    }

  return (
    <tr>
        <td>
            <img src={producto.foto} alt={producto.name} width="50px" />
        </td>
        <td>{producto.name}</td>
        <td>{producto.cantidad}</td>
        <td>{producto.precio}</td>
        <td>
            <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default ItemCarrito