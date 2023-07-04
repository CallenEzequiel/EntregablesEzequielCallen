import React from 'react';
import products from '../products';

const ItemListContainer = () => {
    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;