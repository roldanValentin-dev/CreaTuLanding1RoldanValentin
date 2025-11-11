import { FiShoppingCart } from 'react-icons/fi'

const CartWidget = () => {
    return(
        <div className="cart-container">
            <FiShoppingCart size={24} />
            <span className="cart-notification">0</span>
        </div>
    )
}
export default CartWidget
