import React from "react";
import './Topic.css';
import { Link, useParams } from "react-router-dom";

export default function Topic(props) {
    const {id,name, logo} = props.topic
    
    return (
        <div className="topic">
            <img src={logo} />
            <div className="sec-part">
                <p>{name}</p>
                <Link to={`/${id}`}><button>Start Practice</button></Link>
            </div>
        </div>
    )
}