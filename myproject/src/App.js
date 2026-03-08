import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './modules/Homepage';
import Product from './modules/Product';
import './App.css';
import Navbar from './modules/Navbar'
import Userlogin from './modules/Userlogin';
import Registerpage from './modules/Registerpage';
import Buyproduct from './modules/Buyproduct';
import Aboutpage from './modules/Aboutpage';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row page'>
        <div className='col-md-12'>
        <Navbar></Navbar>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Products" element={<Product/>}/>
        {/* <Route path="/Contact" element={<Contact/>}/> */}
      <Route path='/About' element={<Aboutpage/>}/>
        <Route path='/login' element={<Userlogin/>}/>
        <Route path='/register' element={<Registerpage/>}/>
        <Route path='Products/Buyproduct/:id' element={<Buyproduct/>}></Route>
        <Route path='/cart' element={<cart/>}/>

     </Routes>
   
    </div>
  );
}

export default App;
