import React, { useContext,useState } from 'react';
import Layout from '../../Components/Layout';
import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { Link } from 'react-router-dom';
//import './index.css'

const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    const [email, setEmail] = useState('');
  const [recipientName, setrecipientName] = useState('');
  const [address1, setaddress1] = useState('');
  const [address2, setaddress2] = useState('');
  const [state, setState] = useState('');
  const [City, setCity] = useState('');
  const [postalOrZipCode, setpostalOrZipCode] = useState('');
    
    return ( 
        <Layout title="Cart" description="This is the Cart page" >
            <div >
                <div className="text-center mt-5">
                    <h1>Cart</h1>
                    <p>This is the Cart Page.</p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                
                            </div>
                        }

                        { checkout && 
                            <div className="p-3 text-center text-success">
                                 <h3><p> Enter Your Shipping Details Below</p></h3>
                                 <form>
                                 <div className="Form-group">
      <label id="recipientName">
         Name:
        <input
          type="text"
          name="recipientName"
          value={recipientName}
          placeholder="Enter Your Name"
          onChange={(e)=>setrecipientName(e.target.value)}
        />
      </label>
      </div>
      <div className="Form-group">
      <label>
        Address 1:
        <input
          type="text"
          name="address1"
          value={address1}
          placeholder="Enter Your Address"
          onChange={(e)=>setaddress1(e.target.value)}
        />
      </label>
      </div>
   
      <div className="Form-group">
      <label>
        Address 2:
        <input
          type="text"
          name="address2"
          value={address2}
          placeholder="Enter Your Address"
          onChange={(e)=>setaddress2(e.target.value)}
        />
      </label>
      </div>
     
      <div className="Form-group">
      <label>
        City:
        <input
          type="text"
          name="addressTownOrCity"
          className="city"
          value={City}
          placeholder="Enter Your City"
          onChange={(e)=>setCity(e.target.value)}
        />  
      </label>
      </div>
      <div className="Form-group">
      <label>
        State:
        <input
          type="text"
          name="addressTownOrCity"
          className="city"
          value={state}
          placeholder="Enter Your State"
          onChange={(e)=>setState(e.target.value)}
        />  
      </label>
      </div>

      <div className="Form-group">
      <label>
        ZipCode:
        <input
          type="text"
          name="postalOrZipCode"
          value={postalOrZipCode}
          placeholder="Enter your Zipcode"
          onChange={(e)=>setpostalOrZipCode(e.target.value)}
        />
      </label>
      </div>
      
      
      <div className="Form-group">
      <label>
        EMail:
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter Email"
        />
      </label>
      </div>
     
     
      <div className="Form-group">
      <button  type="submit" >Proceed To Pay</button>
      </div>
      </form>         
                               
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3" style={{width:"50%"}} >
                            <div className="card card-body"  >
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2"style={{height:"40px"}} onClick={handleCheckout}>CHECKOUT
                                   
                                    </button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                                </div>

                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </Layout>
     );
}
 
export default Cart;