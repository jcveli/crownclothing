import { useContext } from 'react'
import  {ReactComponent as ShopIcon}  from '../../assets/shopping-bag.svg'

import { CartContext } from '../../context/cart.context'

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles'

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext); 

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen); 

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )


}


export default CartIcon; 