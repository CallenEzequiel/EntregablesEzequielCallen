import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            <h1>Nombre de la Tienda</h1>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/productos">Productos</a></li>
                <li><a href="/carrito">Carrito</a></li>
                <li><a href="/cuenta">Cuenta</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;