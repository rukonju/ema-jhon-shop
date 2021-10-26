import React from 'react';
import {StarFill, Cart} from 'react-bootstrap-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock, star } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    fullSymbol={<StarFill color="goldenrod"/>}
                    emptySymbol={<StarFill color="goldenrod"/>}
                    readonly></Rating>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                ><Cart/>add to cart</button>
            </div>
        </div>
    );
};

export default Product;