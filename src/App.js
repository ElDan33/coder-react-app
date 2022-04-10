import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ContactUs from './components/pageSections/ContactUs';
import Products from './components/pageSections/Products';
import AboutUs from './components/pageSections/AboutUs';
import Home from './components/pageSections/Home';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/items/ItemDetailContainer';



function App() {

  return (
    <div className="">
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/ContactUs" element={<ContactUs />}></Route>
            <Route exact path="/Products/Details/:id" element={<ItemDetailContainer />}></Route>
            <Route exact path="/Products" element={<Products />}></Route>
            <Route exact path="/AboutUs" element={<AboutUs />} ></Route>
            <Route exact path="/" element={<Home />} ></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
