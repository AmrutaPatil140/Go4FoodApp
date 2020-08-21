import React from 'react'

const Sizes = ({selectedSizes, setSize}) =>  {

    const cuisines = ['Cafe', 'Beverages', 'North Indian', 'South Indian', 'Maharashtrian', 'Fast Food', 'Chinese'];

    return (
        <div className="sizes">
            <h3>Cuisine</h3>
            <div className="size-list">
                {
                    cuisines.map((cuisine, index) => {
                        return (
                            <button 
                                className={ "cuisine_type" + (selectedSizes.includes(cuisine) ? " selected-cuisine" : "")}
                                key={index}
                                onClick={() => setSize(cuisine)}
                            >
                                {cuisine}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sizes;
