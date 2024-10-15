import { useContext } from 'react'
import Card from '../components/Card'
import ProductosContext from '../context/ProductosContext'
import './Inicio.scss'
import useTitulo from '../hooks/useTitulo'

const Inicio = () => { 
  const { productos } = useContext(ProductosContext)
  //console.log(productos)
  useTitulo('Inicio')
  
 
  return (
    <main>
    <section className="section-cards">
      <header className="section-cards__header">
        <h1>Bienvenido!</h1>
        <p>Cosmetica natural</p>
      </header>

      <div className="cards-container" >
     
{
  productos && productos.map((producto) => (
    <Card key={producto.id} producto={producto} />
  ))
}   
    
      </div>
    </section>
   
  </main>
  )
}

export default Inicio