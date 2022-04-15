import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'




const ProductSearch = ({searchHandler, changeHandler, inputValue}) => {

    return (
        <div className="flex flex-row mt-36 items-center">
            <form className="flex" onSubmit={searchHandler}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={changeHandler} 
                    className="px-2 border border-2-solid rounded mr-1 focus:bg-orange-100 " 
                    placeholder="Search a product..."
                    required
                />
                <button
                    className="flex flex-row justify-center w-12 hover:bg-orange-200 active:bg-orange-100 border border-2-solid border-gray-300 rounded">
                    <SearchIcon className="w-8 text-gray-500 text-center"/>
                </button>
            </form>
        </div>
    )
}

export default ProductSearch