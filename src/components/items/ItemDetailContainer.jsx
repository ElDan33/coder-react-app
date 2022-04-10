import React, { useEffect, useState } from 'react'
import customFetch from '../../utils/customFetch';
import { singleProduct } from '../../utils/productsList';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);



    useEffect(()=>{
        customFetch(2000, singleProduct)
        .then(result => setItem(result))
        .catch(error => alert(error))
        .finally(()=>{
            setLoading(false);
        })
    },[item]);

    return (
        <div className="">
            {
                loading 
                ? (<h1>Loading product. Please wait a moment...</h1>)
                :(
                    <ItemDetail item={item}/>
                )
            }
            
        </div>
    )
}

export default ItemDetailContainer