import React, { useState } from 'react'



const ItemCount = ({itemStock, itemName}) => {

    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(itemStock);

    const countIncrease = (e) => {
        if(count < stock){
            setCount(count+1);
        }
    }

    const countDecrease = (e) => {
        if(count > 0){
            setCount(count-1);
        }
    }

    const addCartHandler = () => {

        if(stock > 0){
            alert(`¡ 🎉"(${count}) ${itemName}"🎉 added to the shopping cart 🛒 🛒!`);
            setStock(stock - count);
            setCount(0);
        }else{
            alert(`¡ 🙏 We apologize 🙏 ! \n\nWe're out of stock of "${itemName}" right now 😔 😔.`);
        }
        
    }

    return (
        <div>
            <div className="flex-col text-center w-1/6 border-2 rounded bg-gray-200 p-4">
                <div className="flex justify-between mb-2 border-2 border-solid border-gray-300 rounded border-b-gray-400 border-r-gray-400 bg-white">
                    <button onClick={countDecrease} className="text-cyan-500 mx-3">-</button>
                    <div className="text-white text-shadow-h1 ">
                        {count}
                    </div>
                    <button onClick={countIncrease} className="text-cyan-500 mx-3">+</button>
                </div>
                <span className="text-white text-shadow-h1">Stock: 
                        {<span className="text-green-400 text-shadow-h1"> {
                            stock|| <span className="text-red-400 text-shadow-h1"> {stock}</span>}
                        </span>}
                </span>
                <button 
                    onClick={addCartHandler} 
                    className="w-full text-white text-shadow-h1 bg-cyan-100 border-2 border-solid border-cyan-400 rounded border-b-cyan-500 border-r-cyan-500"
                >
                    Add to Cart
                </button>
            </div>
            
        </div>
    )
}

export default ItemCount