import React from 'react'
import ItemCount from './ItemCount';

const ItemListContainer = () => {

    const flours = ["Wholemeal Flour", "Oat Flour", "Chickpea Flour", "Soybean Flour", "Pea Flour"];
    const nuts = ["Almonds", "Walnuts", "Peanut", "Pistachio", "Cashew Chestnuts"];
    const seeds = ["Flax Seeds", "Sesame Seeds", "Chia Seeds", "Sunflower Seeds", "Poppy Seeds"];


    return (
        <div className="w-screen ml-10">
            <h2 className="mt-10 underline">Catalog</h2>
            <ul className="">
                <h3 className="underline">Flours</h3>
                {flours.map((item,i) => <li  className="" key={i}>{item}<ItemCount itemStock={10} itemName={item} key={i}/></li>)}
                
                <h3 className="underline">Nuts</h3>
                {nuts.map((item,i) => <li  className="" key={i}>{item}<ItemCount itemStock={10} itemName={item} key={i}/></li>)}

                <h3 className="underline">Seeds</h3>
                {seeds.map((item,i) => <li  className="" key={i}>{item}<ItemCount itemStock={10} itemName={item} key={i}/></li>)}
            </ul>
        </div>
        
    )
}

export default ItemListContainer