import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-notification badge bg-primary">Carrito</span>
        </div>
    );
};

export default CartWidget;