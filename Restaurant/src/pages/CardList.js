import React, { Fragment, useState, useEffect } from 'react';

import ProductItem from './store/ProductItem';

const CardList = ({product}) => {

    const [delay, setDelay] = useState(true)

    useEffect(() => {
        setDelay(true);
        setTimeout(() => {
            setDelay(false)
        }, 1000);
    }, [product])

    return (
        <Fragment>
            {
                delay ? <img src="https://career.alliedvision.com/persis/images_avt/gicccccphy.gif" alt="loader" className="loader" />
                :
                <div>
                    <span className="products-length">{product.length} Foods found.</span>
                    <div className="card-list">
                        {
                            product.length === 0 ? <p className="text-center">Sorry, No products of the specified categories :-(</p> :
                            product.map(item => {
                               
                                
                            })
                        }
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default CardList
