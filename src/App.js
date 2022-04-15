import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ContactUs from './components/pageSections/ContactUs';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import ItemListContainer from './components/items/ItemListContainer';
import ProductsContainer from './components/pageSections/ProductsContainer';



function App() {


  return (
    <div className="">
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/ContactUs" element={<ContactUs />}></Route>
            <Route exact path="/Categories/:productCategory" element={<ItemListContainer/>}></Route>
            <Route exact path="/Products/:productId" element={<ItemDetailContainer />}></Route>
            <Route exact path="/" element={<ProductsContainer />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
