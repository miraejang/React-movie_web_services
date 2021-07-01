import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <nav>
            <Link to="/react-movie-web-services/">Home</Link>
            <Link to="/react-movie-web-services/about">About</Link>
        </nav>
    )
}

export default Navigation;
