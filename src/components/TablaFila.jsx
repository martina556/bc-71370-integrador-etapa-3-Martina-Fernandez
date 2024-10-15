import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../context/ProductosContext'

const TablaFila = ({producto}) => {
  //console.log(producto)

  const {setProductoAEditar, eliminarProductoContext} = useContext(ProductosContext)
  
    const handleEditar = () => {
    console.log('editar...', producto.id)
    setProductoAEditar(producto)
  }
  
  const handleEliminar = () => {
    console.log('Eliminar...', producto.id);
    eliminarProductoContext(producto.id); 
};
  
  return (
    <tr>
      <td>{producto.name}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.category}</td>
      <td>{producto.description}</td>
      <td>
        <img src={producto.foto} alt={producto.nombre} className="img-row" />
      </td>
      <td>{producto.envio ? 'SI' : 'NO' }</td>
      <td>
        <button onClick={() => handleEditar(producto)}> Editar</button>
        <button onClick={() => handleEliminar(producto)}>Borrar</button>
      </td>
    </tr>
  )
}

export default TablaFila