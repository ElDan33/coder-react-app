import React from 'react'
import Item from './Item'
import productsList from '../../utils/productsList'


const ItemList = () => {

    return (

        productsList.map((p) => (
                <Item
                    key={p.id}
                    category = {p.category}
                    product={p.product}
                    price={p.price}
                    presentation={p.presentation}
                    stock={p.stock}
                    image={p.image}
                />
                
            ))
        
    )
}

export default ItemList
