import React, { useState } from 'react'
import ItemCount from './ItemCount'

const Item = ({id, category, product, price, presentation, stock, image}) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0)

    const [count, setCount] = useState(0);
    const [countStock, setCountStock] = useState(stock);

    let stockToNumber = Number(countStock.substring(0,2));
    let stockToString;

    
    const countIncrease = () => {
        if(count < stockToNumber){
            setCount(count+1);
            console.log(presentation);
        }
    }

    const countDecrease = () => {
        if(count > 0){
            setCount(count-1);
        }
    }

    const addCartHandler = () => {
        if(stockToNumber > 0){
            alert(`¡ 🎉"(${count}) ${product}"🎉 added to the shopping cart 🛒 🛒!`);
            if(stock.includes("units")){
                stockToString = ((stockToNumber - count).toString());
                stockToString += " units";
            } else if(stock.includes("kg")){
                stockToString = ((stockToNumber - ((totalQuantity * count))/1000).toString());
                stockToString += " kg";
            }
            setCountStock(stockToString);
            setCount(0);
        }
    }


    const totalPriceHandler = (e) =>{
        if(e.target.value === "Options"){
            setTotalPrice(0);
            setTotalQuantity(0);
        }else if(e.target.value === "100g"){
            setTotalPrice(price);
            setTotalQuantity(100);
        }else if(e.target.value === "250g" && presentation.length === 1){
            setTotalPrice(price);
            setTotalQuantity(250);
        }else if(e.target.value === "250g" && presentation.length >1){
            setTotalPrice(price * 2.5);
            setTotalQuantity(250);
        }else if(e.target.value === "500g" && presentation.length === 1){
            setTotalPrice(price);
            setTotalQuantity(500);
        }else if(e.target.value === "500g" && presentation.length > 1){
            setTotalPrice(price * 5);
            setTotalQuantity(500);
        }
    }

    return (
        <div key={id} className="flex flex-col justify-center items-center mt-8  w-96 bg-transparent border-solid border-4 border-gray-200 rounded">
            <h4 className="">{product}</h4>
            <div className="w-full h-80">
                <img className="box-border w-full h-80" src={image} alt={product} />
            </div>
            <div className="flex flex-col w-full justify-center items-center">
                <div className="mt-2">
                    <div>Presentation:
                        <select className="ml-2 text-green-400 text-shadow-h1 bg-cyan-100 border-2 border-solid border-cyan-400 rounded" name="Presentation" id="" onChange={totalPriceHandler}>
                            <option id="default" className="text-green-400" value="Options">Options</option>
                            {presentation.map((e,i)=><option key={i} className="text-green-400" value={e}>{e}</option>)}
                        </select>
                    </div>
                    <div>  
                        <span>Price: <span className="text-green-400 text-shadow-h1">$ {totalPrice}</span></span>
                    </div>
                </div>
                <ItemCount
                    count = {count}
                    stockToNumber = {stockToNumber}
                    countIncrease = {countIncrease}
                    countDecrease = {countDecrease}
                    addCartHandler = {addCartHandler}
                    countStock = {countStock}
                />
            </div>
        </div>
    )
}

export default Item
