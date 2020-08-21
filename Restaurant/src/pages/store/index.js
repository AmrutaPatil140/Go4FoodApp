import React from 'react';
import Layout from '../../Components/Layout';
import './index.css'
import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Store" description="This is the Store page" >
            <div className="center" >
                <div className="text-center mt-5">
                    <h1> Food Store</h1>
                    <p>This is the Food Store Page.</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;