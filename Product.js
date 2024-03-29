import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //Add item to basket...
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating,
            },
        })
    };


    return (
        
        <div className="product">
          <div class="product__info">
             <p>{title}</p>
             <p className="product__price">
                <small>GHC</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map(() => (
                        <p>⭐</p>
                    ))}
            </div>
         </div>
         
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
         
                
            
        </div>
        
    )
}

export default Product
