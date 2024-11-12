import './CardItem.css'
import { getProducts, getProductsByCategory } from "../../asyncmock"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function CardItem({ Item, Valor, Img }) {
    let [productos, setProductos] = useState([])
    let {categoryId} = useParams ()

    useEffect(() => {
        let asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
        getProducts()
            .then((data) => {
                setProductos(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [productos])

    return (
        <>
            {productos.map((producto) => (
                <div key={producto.id} className="divCard">
                    <img src={producto.img} alt="imagen" className="imgItem" />
                    <h3 className="titleCard">{producto.name}</h3>
                    <p className="priceCard">${producto.price}</p>
                    <button type="button" class="btn btn-dark btnCard">Agregar</button>

                </div>
            ))}
            
        </>
    )
}

export default CardItem