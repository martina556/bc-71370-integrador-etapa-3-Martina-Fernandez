import { createContext, useEffect, useState } from 'react';
import { helperPeticionesHttp } from '../helpers/helper-peticiones-http';

const ProductosContext = createContext("TEST");

// eslint-disable-next-line react/prop-types
const ProductosProvider =({children}) => {
    
    const url= import.meta.env.VITE_BACKEND_PRODUCTOS

    const [productos, setProductos] = useState(null)

    const [productoAEditar, setProductoAEditar, setProductoAEliminar] = useState(null)


    useEffect(() => {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {
    try {
        const prods = await helperPeticionesHttp(url, {})
        //console.log(prods)
        setProductos(prods)
    } catch (error) {
        console.error('getAllProductos', error) 
    }
}

    const crearProductoContext = async (nuevoProducto) => {

 try {

    const options={
    method: 'POST',
    headers: {'content-type' : 'application/json'},
    body: JSON.stringify(nuevoProducto)
 }
 const newProducto = await helperPeticionesHttp(url, options)

 setProductos ([...productos, newProducto])
    
        
    } catch (error) {
        console.error('[crearProductoContext]', error)

    }
}

const actualizarProductoContext = async (productoEditado) => {

 try {
     //console.log(productoEditado)
    const options = {
        method: 'PUT',
        headers:{'content-type' : 'application/json'},
        body: JSON.stringify(productoEditado)
    }
     const urlEdicion= url + productoEditado.id
     const editedProducto = await helperPeticionesHttp(urlEdicion, options)

     const nuevoEstadoProducto = productos.map(producto => producto.id === editedProducto.id ? productoEditado :producto)
     setProductos(nuevoEstadoProducto)
    } catch (error) {
        
        console.error('[actualizarProductoContext', error)
    }
}

const eliminarProductoContext = async (productoId) => {
    try {
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        const urlDelete = `${url}/${productoId}`; // Usa el ID del producto directamente en la URL
        await helperPeticionesHttp(urlDelete, options);

        // Actualiza la lista de productos filtrando el producto eliminado
        setProductos((prevProductos) =>
            prevProductos.filter((producto) => producto.id !== productoId)
        );
    } catch (error) {
        console.error('[eliminarProductoContext]', error);
    }
};




    

const data = {
    productos,
    crearProductoContext,
    actualizarProductoContext,
    productoAEditar,
    setProductoAEditar,
    eliminarProductoContext 
}
//console.log(data, "DATA")
//console.log(productos, "context")  
    return (
        <ProductosContext.Provider value={data}>
            {children}
        </ProductosContext.Provider>
    )
}

export { ProductosProvider }
export default ProductosContext;