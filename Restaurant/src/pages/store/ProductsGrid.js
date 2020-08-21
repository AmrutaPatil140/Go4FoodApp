import React, { useContext,useState,useEffect, Fragment} from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';
import './ProductsGrid.css';
import './style.css'
import './size.css'
import filterList from '../filterList'
import CardList from '../CardList'
import Sizes from '../Sizes'

const ProductsGrid = () => { 
   const [products, setProducts] = useState([]);
   const [selectedSizes, setSelectedSizes] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(filterList([], null));
    if(JSON.parse(localStorage.getItem("cart"))) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [])

  const setSize = (cuisine) => {
    const cuisines = [...selectedSizes];
    
    if(cuisines.includes(cuisine)) {
      const index = cuisines.indexOf(cuisine);
      cuisines.splice(index, 1);
    }
    else {
        cuisines.push(cuisine);
    }
    setSelectedSizes(cuisines);
    setProducts(filterList(cuisines, 'cuisine'));
  }


    
    const sortProducts = (method) => {
        const array = products;
    
        if(method === "Lowest to Highest") {
            array.sort(function(a, b){
              return a.cost-b.cost
          })
        }
        else if(method === "Highest to Lowest") {
            array.sort(function(a, b){
              return b.cost-a.cost
          })
        }
       
      }
    const [value, setValue] = useState('Select');

    const setList = (e) => {
        setValue(e.target.value);
        sortProducts(e.target.value);
    }
    
    
    return ( 
        <div className="p__container">
            <div className="row"  >
           
                <div className="col-sm-8">
                    
                
                
                <div className="sort-list"  >
                    Sort by&nbsp;: &nbsp;
                    <select value={value} onChange={setList} style={{cursor:"pointer"}}>
                        <option value="Select">Select</option>
                        <option value="Highest to Lowest">High to Low</option>
                        <option value="Lowest to Highest">Low to High</option>
                    </select>
                </div>
                
            <CardList product={products}  />
                </div>
                <div className="head">
        
        <div className="filt">
        
        <div className="fil">
        </div>
        </div>
        <div className="fi">
        <div className="cuisine"> </div>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        <div className="size-list">
        <Sizes selectedSizes={selectedSizes} setSize={setSize} />
            </div>
        </div>
        </div>
        </div>
        

            <div className="p__grid">

                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
           
            <div className="p__footer">

            </div>
        </div>
        </div>
     );
            }
           
export default ProductsGrid;