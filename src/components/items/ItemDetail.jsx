import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0)

    const [count, setCount] = useState(0);
    const [countStock, setCountStock] = useState(item.stock);

    let stockToNumber = Number(countStock.substring(0,2));
    let stockToString;

    
    const countIncrease = () => {
        if(count < (stockToNumber*1000) && item.product !== "Caramel Cookies"){
            setCount(count+1);
            console.log(item.presentation);
        }else if(item.product === "Caramel Cookies" && count < stockToNumber){
            setCount(count+1);
            console.log(item.presentation);
        }
    }

    const countDecrease = () => {
        if(count > 0){
            setCount(count-1);
        }
    }

    const addCartHandler = () => {
        if(stockToNumber > 0){
            alert(`¡ 🎉"(${count} of ${totalQuantity}) ${item.product}"🎉 added to the shopping cart 🛒 🛒!`);
            if(item.stock.includes("units")){
                stockToString = ((stockToNumber - count).toString());
                stockToString += " units";
            } else if(item.stock.includes("kg")){
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
            setTotalPrice(item.price);
            setTotalQuantity(100);
        }else if(e.target.value === "250g" && item.presentation.length === 1){
            setTotalPrice(item.price);
            setTotalQuantity(250);
        }else if(e.target.value === "250g" && item.presentation.length >1){
            setTotalPrice(item.price * 2.5);
            setTotalQuantity(250);
        }else if(e.target.value === "500g" && item.presentation.length === 1){
            setTotalPrice(item.price);
            setTotalQuantity(500);
        }else if(e.target.value === "500g" && item.presentation.length > 1){
            setTotalPrice(item.price * 5);
            setTotalQuantity(500);
        }else{
            setTotalPrice(item.price);
            setTotalQuantity(12);
        }
    }

    return (
        <div>
            <div className="flex flex-row  mt-12 w-screen">
                <div className="bg-orange-200 ml-24 mr-12 w-1/2 h-full border border-2-solid rounded">
                    <img src={item.image} alt={item.product} className="w-full"></img>
                    
                    <h3 className="mt-6 mb-12 underline text-center text-white text-shadow-h1 text-lg">Description</h3>
                    <p className="mb-12 text-center text-white text-shadow-h1 text-lg">{item.description}</p>

                </div>
                <div className="bg-orange-200 flex flex-col justify-between w-80 border border-2-solid rounded-md ">
                    <div className="flex flex-col text-xl p-2 mt-12">
                        <h2 className="pb-2 text-white text-shadow-h1"><span className="font-bold">Product: </span>{item.product}</h2>
                        <h3 className="pb-6 text-white text-shadow-h1"><span className="font-bold">Category: </span>{item.category}</h3>
                        <div className="pb-6 text-white text-shadow-h1">
                            <span className="font-bold">Presentation: </span>
                            <select className="ml-2 text-2xl text-green-400 text-shadow-h1 bg-cyan-100 border-2 border-solid border-cyan-400 rounded" name="Presentation" id="" onChange={totalPriceHandler}>
                                <option id="default" className="text-green-400" value="Options">Options</option>
                                {item.presentation.map((e,i)=><option key={i} className="text-green-400" value={e}>{e}</option>)}
                            </select>
                        </div>
                        <div className="text-3xl mt-32">  
                            <span className="font-bold text-white text-shadow-h1">Price: </span> <span className="text-green-400 text-shadow-h1">$ {totalPrice}</span>
                        </div>
                    </div>
                    <div className="text-2xl">
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
            </div>
            
            <div className="mt-36">
                <Link to="/Products" className="w-full text-center px-12 py-2 font-bold border border-2-solid rounded">Go back</Link>
            </div>
            
        </div>
    )
}

export default ItemDetail