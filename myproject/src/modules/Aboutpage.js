import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Aboutpage() {
    return (
        <div className='container-fluid'>
            <div class="card bg-dark border-0">
                <img src="/assets/shop.jpg" class="card-img" alt="background" height="460px" />
                <div class="card-img-overlay d-flex flex-column">
                    <div className=''>
                        <h1 class="card-title fw-border text-black">About Us</h1>
                        <p class="card-text"></p>

                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div class="card" style={{ width: "30rem" }}>
                        <img src="/assets/images.jpeg" class="card-img-top" alt="background" height="450px" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="card" style={{ width: "32rem" }}>
                        <div class="card-body">
                            <h1 class="card-title">Fashion is about Passion, not just clothes</h1>
                            <p class="card-text">Personalized Design</p>
                            <p class="card-text">dkgjhldgklhgdlkjdlgjndglkjdg</p>
                            <h1 class="card-title">Fashion is about Passion, not just clothes</h1>
                            <p class="card-text">Personalized Design</p>
                            <p class="card-text">dkgjhldgklhgdlkjdlgjndglkjdg</p>
                            <a href="#" class="btn btn-primary">Discover more</a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="card bg-dark text-white border-0">
                <img src="/assets/cart.jpg" class="card-img" alt="background" height="470px" />
                <div class="card-img-overlay d-flex flex-column">
                    <div className=''>
                        <h1 class="card-title fw-border text-black"></h1>
                        <p class="card-text"></p>

                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div class="col-md-6 mt-5 p-5">
                    <h1 className=''>We serve uniqueness because you are unique to us</h1>

                </div>
            </div>
            <div className='row'>
                <div className='col-md-3'>
            <div class="card" style={{width: "18rem"}}>
                <img src="/assets/fash4.jpeg" class="card-img-top" alt="background" height="200px"/>
                    <div class="card-body">
                        <h5 class="card-title">Manish Malhotra</h5>
                        <p class="card-text">Fashion Designere</p>
                        <a href="#" class="h2"><FaFacebookSquare /></a>
                        <a href="#" class="h2"><FaTwitterSquare /></a>
                        <a href="#" class="h2"><FaInstagramSquare /></a>
                        <a href="#" class="h2"><FaLinkedin /></a>
                    </div>
            </div>
            </div>
            <div className='col-md-3'>
            <div class="card" style={{width: "18rem"}}>
                <img src="/assets/fash2.jpg" class="card-img-top" alt="background"height="200px"/>
                    <div class="card-body">
                        <h5 class="card-title">Ritu kumar</h5>
                        <p class="card-text">Fashion Designere</p>
                        <a href="#" class="h2"><FaFacebookSquare /></a>
                    <a href="#" class="h2"><FaTwitterSquare /></a>
                    <a href="#" class="h2"><FaInstagramSquare /></a>
                    <a href="#" class="h2"><FaLinkedin /></a>
                    </div>
            </div>
            </div>
            <div className='col-md-3'>
            <div class="card" style={{width: "18rem"}}>
                <img src="/assets/fash1.avif" class="card-img-top" alt="background" height="200px"/>
                    <div class="card-body">
                        <h5 class="card-title">Anamika khanna</h5>
                        <p class="card-text">Fashion Designere</p>
                        <a href="#" class="h2"><FaFacebookSquare /></a>
                    <a href="#" class="h2"><FaTwitterSquare /></a>
                    <a href="#" class="h2"><FaInstagramSquare /></a>
                    <a href="#" class="h2"><FaLinkedin /></a>
                    </div>
            </div>
            </div>
            <div className='col-md-3'>
            <div class="card" style={{width: "18rem"}}>
                <img src="/assets/fash3.jpeg" class="card-img-top" alt="background" height="200px"/>
                    <div class="card-body">
                        <h5 class="card-title">Anita Dongre</h5>
                        <p class="card-text">Fashion Designere</p>
                        <a href="#" className="h2"><FaFacebookSquare /></a>
                    <a href="#" class="h2"><FaTwitterSquare /></a>
                    <a href="#" class="h2"><FaInstagramSquare /></a>
                    <a href="#" class="h2"><FaLinkedin /></a>
                    </div>
            </div>
            </div>
            </div>

        </div>


    )
}
export default Aboutpage