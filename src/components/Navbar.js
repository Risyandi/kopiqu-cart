import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <nav role="navigation">
        <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">Kopiqu</Link>
        <ul className="right hide-on-med-and-down">
            <li>
            <Link to="/">Shop</Link>
            </li>
            <li>
            <Link to="/cart">My cart</Link>
            </li>
            <li>
            <Link to="/cart">
            <i className="material-icons">shopping_cart</i>
            </Link>
            </li>
        </ul>

        <ul id="nav-mobile" className="sidenav">
            <li>
            <Link to="/">Shop</Link>
            </li>
            <li>
            <Link to="/cart">My cart</Link>
            </li>
            <li>
            <Link to="/cart">
            <i className="material-icons">shopping_cart</i>
            </Link>
            </li>
        </ul>
        <Link to="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
        </div>
    </nav>
    )
}

export default Navbar;