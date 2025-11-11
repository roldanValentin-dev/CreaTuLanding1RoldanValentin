import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)

        const getProduct = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    fetch('/data/products.json')
                        .then(response => response.json())
                        .then(data => {
                            const foundProduct = data.find(product => product.id === itemId)
                            resolve(foundProduct)
                        })
                        .catch(error => {
                            console.error('Error al obtener el producto:', error)
                            resolve(null)
                        })
                }, 1500)
            })
        }

        getProduct().then(data => {
            setProduct(data)
            setLoading(false)
        })
    }, [itemId])

    if (loading) {
        return (
            <div className="item-detail-container">
                <p>Cargando producto...</p>
            </div>
        )
    }

    if (!product) {
        return (
            <div className="item-detail-container">
                <p>Producto no encontrado</p>
            </div>
        )
    }

    return (
        <div className="item-detail-container">
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer