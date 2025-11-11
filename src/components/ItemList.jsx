import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
    if (products.length == 0) {
        return (
            <div className="item-list">
                <p>No se encontraron productos en esta categoría.</p>
            </div>
        )
    }
     return (
        <div className="item-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <div className="product-info">
                        <h3>{product.name}</h3>
                        <p className="product-price">${product.price}</p>
                        <Link to={`/item/${product.id}`}>
                            <button className="btn-detail">Ver Detalle</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ItemList