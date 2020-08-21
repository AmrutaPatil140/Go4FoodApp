import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { BsFillStarFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div className="card card-body" style={{width:"80%", whitespace:"nowrap"}} >
            
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px", maxwidth:"80%"}} className="img-fluid" 
            src={product.img + '?v=' + product.id} alt=""/>
            <p>{product.name +","+product.loc} </p>
           
            <h3 style={{fontSize:'14px',verticalAlign:'middle',color:'#000000'}} className="text-left">{formatNumber(product.cost)}<IconContext.Provider value={{ style:{verticalAlign: 'middle'},size:'12px',color:'#FFD700'}}><div><BsFillStarFill/>{product.rating}  |   {product.time} |</div></IconContext.Provider></h3>
            <div className="text-right">
                <Link  to="/" className="btn btn-link btn-sm mr-2">Details</Link>

                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm">Add more</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm">Add to cart</button>
                }
                
            </div>
        </div>
     );
}
 
export default ProductItem;