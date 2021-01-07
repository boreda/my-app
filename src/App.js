import React from 'react';
import Product from './Product';

function App(){
    const productsData = [
        {
            id: 1,
            name: "iPhoneMax",
            price: "$1,000.00",
            company: "Apple",
            year: "2020"
        },
        {
            id: 2,
            name: "iPhoneMini",
            price: "$699.00",
            company: "Apple",
            year: "2020"
        },
        {
            id: 3,
            name: "Amazon Alexa",
            price: "$899.00",
            company: "AMAZON",
            year: "2018"
        },
        {
            id: 4,
            name: "Google Smart",
            price: "$1,100.00",
            company: "Google",
            year: "2019"
        }
    ]

    const productsComponent = productsData.map((product)=>{
        return(
            <Product key={product.id} product={product} />
        )
    })
    return(
        <div className="todo-list" style={{marginTop:'10px', borderRadius:15}}>
            <h2>Products List</h2>
            {productsComponent}
        </div>
    )
}

export default App;