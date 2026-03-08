import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Product() {
    const[sv,sf]=useState([])

    const apidata = () => {
        axios.get("https://dummyjson.com/carts").then((d) => {
            console.log(d.data.carts);
            sf(d.data.carts);
        })
    }
    useEffect(() => {
        apidata();
    },[]);

   
        return(
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-border text-center'>Latest products</h1>
                        <hr/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                            <button className='btn btn-outline-dark me-2'>ALL</button>
                            <button className='btn btn-outline-dark me-2'>Mens Clothing</button>
                            <button className='btn btn-outline-dark me-2'>Womens Clothing</button>
                            <button className='btn btn-outline-dark me-2'>Jewellery</button>
                            <button className='btn btn-outline-dark me-2'>Electronics</button>
                             </div>
                    </div>
                </div>
             <div className='row'>
                 {sv.map((cart)=>
                 cart.products.map((d)=>(
                <div className='col-md-3' key={d.id}>
                    <div className="card shadow mt-3">
                        <img src={d.thumbnail} className="card-img-top" alt={d.title} width={70}/>
                        <div className="card-body">
                            <h5 className="card-title">{d.title}</h5>
                            <p className="card-text">{d.price}</p>
                            <Link to={'Buyproduct/'+d.id} class="btn btn-primary">Buy Now</Link>
                        </div>  
                    </div>
                    </div>
                 ))
                )}

               </div>
                   
            </div>
        
    
    );
    
}     
    

export default Product