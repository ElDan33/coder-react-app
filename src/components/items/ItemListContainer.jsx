import React, { useEffect, useState } from 'react'
import customFetch from '../../utils/customFetch';
import ItemList from './ItemList';
import productsList from '../../utils/productsList'


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        customFetch(2000, productsList)
        .then(result => setItems(result))
        .catch(error => alert(error))
        .finally(()=>{
            setLoading(false);
        })
    },[items]);
    
    return (
        <div>
            {
                loading 
                ? (<h1>Loading products. Please wait a moment...</h1>)
                :(
                <div className="flex flex-column justify-around flex-wrap w-screen">
                    <ItemList items={items}/>
                </div>
                )
            }
            
        </div>
        
    )
}

export default ItemListContainer