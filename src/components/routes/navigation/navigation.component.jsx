import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';
import './navigation.styles.scss';

import CrownLogo from '../../../assets/crown.svg';



const Navigation = () => { 
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
                        <Link className='nav-link' to='/signin'>
                            Sign In
                        </Link>
                    </div>
                </div>
                <Outlet />
            </Fragment>
		</div>
	)
}


export default Navigation; 