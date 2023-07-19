import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
    const title = '<Front-End Whiz />'
    return (
        <nav className="header">
            <h1><Link to="/" className="link">{title}</Link></h1>
        </nav>
    )
}