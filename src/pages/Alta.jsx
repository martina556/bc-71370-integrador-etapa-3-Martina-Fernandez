import useTitulo from "../hooks/useTitulo"
import Formulario from "../components/Formulario"
import Tabla from "../components/Tabla"

const Alta = () => {
  useTitulo('Alta')
  return (
    <>
    <h1>Formulario de Alta de productos</h1>
    <h2>Agregar producto</h2>
    <Formulario/>
    <Tabla/>
    </>
  )
}

export default Alta