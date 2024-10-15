import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"

const Carrito = () => {

  useTitulo('Carrito')

  return (
    <>
      <h1>Productos en el Carrito</h1>
      <hr />
      <ListadoCarrito/>
      
    </>
  )
}

export default Carrito