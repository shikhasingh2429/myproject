import React from 'react';
import Product from './Product';

function Homepage() {
    return (
        <div className='container-fluid'>
            <div class="card bg-dark text-white border-0">
                <img src="/assets/photo.jpg" class="card-img" alt="background" height="660px"/>
                <div class="card-img-overlay d-flex flex-column">
                    <div className=''>
                    <h1 class="card-title fw-border">Trending Fashion</h1>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>
                </div>
            </div>
            <Product/>
        </div>

    )
}
export default Homepage