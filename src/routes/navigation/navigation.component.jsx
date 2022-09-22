import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';


import { signOutUser } from '../../utils/firebase/firebase.utils';


import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CrownLogo from '../../assets/crown.svg';

import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from  './navigation.styles.jsx';





const Navigation = () => { 
    const { currentUser } = useContext(UserContext); 
    const { isCartOpen } =useContext(CartContext)


	return (
		<div>
            <Fragment>
                <NavigationContainer>
                   <LogoContainer to='/'>
                       <img src={CrownLogo} alt ="Crown Logo" />
                    </LogoContainer>
                    <NavLinksContainer>
                        <NavLink to='/shop'>
                            Shop
                        </NavLink>
                        {
                            currentUser ? (
                                <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
                                ) : (
                                    <NavLink to='/auth'>Sign In</NavLink> 
                            )}
                        <CartIcon />
                    </NavLinksContainer>
                                {isCartOpen &&  <CartDropdown />}
                </NavigationContainer>
                <Outlet />
            </Fragment>
		</div>
	)
}


export default Navigation; 