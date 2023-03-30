import React from 'react';
import './Header.css'
import logo from '../img/ellipse_1.png'
const Header = () => {
    return (
        <nav className='header'>

            <h1>Knowledge Cafe</h1>
            <div className='menu'>
                <div className='header-nav'>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/login">Login</a>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            
        </nav>
        
    );
};

export default Header;