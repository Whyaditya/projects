import { Link } from 'react-router-dom'
import { IoStorefront } from "react-icons/io5";
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { EcomStore } from '../store/Ecom-store';
  

const Header = () => {

    const {userDetail , loggedIn} = useContext(EcomStore);
  

    return (
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <IoStorefront />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        {loggedIn ? <><li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home/profile">profile</Link>
                        </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/home/orders">orders</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    products
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to='/home/products'>show products</Link></li>
                                    <li><Link class="dropdown-item" to="/home/addproducts">Add products</Link></li>
                                    <li><Link class="dropdown-item disabled" to="/home/updateproducts">update products</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">others</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/home/log-out">{`log out(${userDetail.name})`}</Link>
                            </li></> 
                            : 
                            <>
                            <li class="nav-item ">
                                <Link class="nav-link" to="/log-in">log in</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/sign-up">sign up</Link>
                            </li>
                        </>}



                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;