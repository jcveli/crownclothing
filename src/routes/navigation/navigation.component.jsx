import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';


import { signOutUser } from '../../utils/firebase/firebase.utils';


import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';



import './navigation.styles.scss';
import CrownLogo from '../../assets/crown.svg';



const Navigation = () => { 
    const { currentUser } = useContext(UserContext); 
    const { isCartOpen } =useContext(CartContext)


	return (
		<div>
            <Fragment>
                <div className='navigation'>
                    <Link className='logo-container' to='/'>
                       <img src={CrownLogo} alt ="Crown Logo" />
                    </Link>
                    <div className='nav-links-container'>
                        <Link className='nav-link' to='/shop'>
                            Shop
                        </Link>
                        {
                            currentUser ? (
                                <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                                ) : (
                                    <Link className='nav-link' to='/auth'>Sign In</Link> 
                            )}
                        <CartIcon />
                    </div>
                      {isCartOpen &&  <CartDropdown />}
                </div>
                <Outlet />
            </Fragment>
		</div>
	)
}


export default Navigation; 