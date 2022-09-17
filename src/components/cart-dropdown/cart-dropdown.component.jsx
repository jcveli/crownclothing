import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../context/cart.context'
import { useContext } from 'react'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);


    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.length ? (
            cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
            ) : (
            <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
            <Button>Go To Checkout</Button>
        </div>
    )
}


export default CartDropdown; 