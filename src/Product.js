import React from 'react';

function Product(props){
    return(
        <div>
            <ol>
                <li><span>Name of the Product {props.product.name}</span> and the price {props.product.price}</li>
                <li>Designed by {props.product.company}</li>
                <li>In the year {props.product.year}</li>
            </ol>
        </div>
    )
}

export default Product;