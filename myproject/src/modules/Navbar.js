import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-2"style={{fontSize:'30px',fontWeight:'bold',color:'darkblue'}} to="/">OnlineShop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                    </ul>
                    <div className='buttons'>
                        <Link to="/login"className='btn btn-outline-dark ms-1'>
                           <i className="fa fa-sign-in"></i> Login</Link>
                           <Link to="/register"className='btn btn-outline-dark ms-1'style={{marginLeft:'10px'}}>
                           <i className='fa fa-user-plus me-1'></i> Register</Link>
                           <Link to="/cart"className='btn btn-outline-dark ms-1'style={{marginLeft:'10px'}}>
                           <i className='fa fa-shopping-cart  me-1'></i> Cart(0)</Link>
                     </div>

                    <form className="d-flex">
                        <input className=" form-control" style={{marginLeft:'30px'}}type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    
                </div>
            </div>
        </nav>

    )
}
export default Navbar