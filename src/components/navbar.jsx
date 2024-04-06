import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"

export const Navbar=()=>{
    return(
        <div className="navbar">
        <div className="myshop">
            <h1>MyShop</h1>
        </div>
            <div className="links z">
            <Link to="/">Shop</Link>
            <Link to="/contact">contact</Link>
            <Link to="/cart">
                <ShoppingCart size={32}/>
            </Link>
            </div>
        </div>
    )
}