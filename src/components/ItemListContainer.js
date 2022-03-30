import React from 'react'

const ItemListContainer = () => {

    const flours = ["Wholemeal Flour", "Oat Flour", "Chickpea Flour", "Soybean Flour", "Pea Flour"];
    const nuts = ["Almonds", "Walnuts", "Peanut", "Pistachio", "Cashew Chestnuts"];
    const seeds = ["Flax Seeds", "Sesame Seeds", "Chia Seeds", "Sunflower Seeds", "Poppy Seeds"];


    const clickHandler = (e) => {
        e.target.style.color = "red";
        alert(e.target.innerHTML);
    }

    return (
        <div className="w-screen ml-10">
            <h2 className="mt-10 underline">Catalog</h2>
            <ul>
                <h3 className="underline">Flours</h3>
                {flours.map((item,i) => <li onClick={clickHandler} className="list-disc ml-10" key={i}>{item}</li>)}

                <h3 className="underline">Nuts</h3>
                {nuts.map((item,i) => <li onClick={clickHandler} className="list-disc ml-10" key={i}>{item}</li>)}

                <h3 className="underline">Seeds</h3>
                {seeds.map((item,i) => <li onClick={clickHandler} className="list-disc ml-10" key={i}>{item}</li>)}
            </ul>
        </div>
        
    )
}

export default ItemListContainer