import { FETCH_PRODUCTS,FILTER_PRODUCTS_BY_SIZE } from './types';

export const fetchProducts = () => (dispatch) => {
   fetch('http://localhost:3000/products').then(res => res.json())
       .catch(err => fetch('db.json').then(res => res.json()).then(data => data.products))
       .then(products => {
           return dispatch({
               type: FETCH_PRODUCTS,
               payload: products
           });
       });
}


export const filterProducts = (products, size) => (dispatch) => {
    return dispatch({
      type: FILTER_PRODUCTS_BY_SIZE,
      payload: {
        size: size,
        items: size === '' ? products : products.filter(a => a.availableSizes.indexOf(size.toUpperCase()) >= 0)
      }
    });
   }
   
