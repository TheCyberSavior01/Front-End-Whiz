import React from "react";
import './HomePage.css';
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function HomePage() {
    return (
       <div className="homepage">
            <Header />
            <Outlet />
       </div>
    )
}