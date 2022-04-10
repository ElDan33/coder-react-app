import React from 'react'


const ItemCount = ({count, stockToNumber, countIncrease, countDecrease, addCartHandler, countStock}) => {


    return (
            <div className="flex-col text-center w-full border-2 bg-amber-50 p-4">
                <div className="flex justify-between mb-2 border-2 border-solid border-gray-300 rounded border-b-gray-400 border-r-gray-400 bg-white">
                    <button onClick={countDecrease} className="text-cyan-500 mx-3">-</button>
                    <div className="text-white text-shadow-h1 ">
                        {count}
                    </div>
                    <button onClick={countIncrease} className="text-cyan-500 mx-3">+</button>
                </div>
                {(stockToNumber > 0 
                    ? <span className="text-green-400 text-shadow-h1">Stock: {countStock}</span>
                    :<span className="text-red-400 text-shadow-h1">Stock: {countStock}</span>
                )}                
                <button 
                    onClick={addCartHandler}
                    disabled={count === 0 || stockToNumber === 0}
                    className={count === 0 || stockToNumber === 0 ? "w-full text-white text-shadow-h1 bg-gray-500 border-2 border-solid border-gray-400 rounded":"w-full text-white text-shadow-h1 bg-cyan-100 border-2 border-solid border-cyan-400 rounded border-b-cyan-500 border-r-cyan-500"}
                >
                    Add to Cart
                </button>
            </div>
            
    )
}

export default ItemCount