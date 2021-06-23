import React from 'react'
import '../styles/components/Products.css'
import Product from './Product'

export const Products = ({products}) => {
    return (
        <div className="Products">
            <div className="Product-items">
                {products.map( product=>(
                   <Product key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}
export default Products