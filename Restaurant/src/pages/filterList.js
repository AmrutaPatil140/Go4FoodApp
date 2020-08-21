
import {dummyProducts} from '../dummy'

export default function filterList(arr, method) {

    if(method == null) return dummyProducts;

    else {
          return dummyProducts.filter(product => {
          const cuisineArray = product.cuisine.split(" ");
          if(arr.length > 0) {
                if(cuisineArray.some(r => arr.indexOf(r) >= 0)) {
                    return product;
            }
          }
          else {
              return dummyProducts;
          }
      })  
    }
}

