import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import CartItem from './CartItem';
//import styles from './CartProducts.module.css';

const CartProducts = () => {

    const { cartItems } = useContext(CartContext);

    return ( 
        
            <div className="card card-body border-0">

                {
                    cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
                }

            </div>
      
     );
} 
export default CartProducts;