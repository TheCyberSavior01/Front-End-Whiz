import React from "react";
import './MainComp.css';
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

export default function MainComp() {
    const topics = useLoaderData()
    
    return(
        <div className="main-wrapper">
            <div className="main">
                {
                topics.data.map(topic => <Topic key={topic.id} topic={topic}/>)
                }
            </div>
        </div>
    )
}