import { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1)

    const handleQuantityChange = (action) => {
        if (action === 'increment' && quantity < product.stock) {
            setQuantity(quantity + 1)
        }
        if (action === 'decrement' && quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = () => {
        Swal.fire({
            title: '¡Producto agregado!',
            html: `<strong>${product.name}</strong><br>Cantidad: ${quantity} unidad${quantity > 1 ? 'es' : ''}<br>Total: $${product.price * quantity}`,
            icon: 'success',
            confirmButtonText: 'Continuar comprando',
            confirmButtonColor: '#0ea5e9',
            timer: 3000,
            timerProgressBar: true
        })
    }

    return (
        <div className="item-detail">
            <div className="item-detail-image">
                <img src={product.image} alt={product.name} />
            </div>
            
            <div className="item-detail-info">
                <h2>{product.name}</h2>
                <p className="item-category">Categoría: {product.category}</p>
                <p className="item-description">{product.description}</p>
                <p className="item-price">${product.price}</p>
                <p className="item-stock">Stock disponible: {product.stock}</p>
                
                <div className="item-counter">
                    <button 
                        onClick={() => handleQuantityChange('decrement')}
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <span className="quantity">{quantity}</span>
                    <button 
                        onClick={() => handleQuantityChange('increment')}
                        disabled={quantity >= product.stock}
                    >
                        +
                    </button>
                </div>

                <button 
                    className="btn-add-cart"
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                >
                    {product.stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
                </button>

                <Link to="/" className="btn-back">
                    <button>Volver al Catálogo</button>
                </Link>
            </div>
        </div>
    )
}

export default ItemDetail