import React from "react";
import "../Styles/Card.css"
import BadgeSold from "./BadgeSold"
import BadgeOnline from "./BadgeOnline"


export default function Card1(props){
let BadgeToRender
        if (props.openSpots === 0){
            BadgeToRender = <BadgeSold/>;
        }
        else if (props.location === "Online"){
            BadgeToRender = <BadgeOnline/>;
        }

    return(
        <div className="card">
                {BadgeToRender}
            <img className="katie" src={`./Images/${props.coverImg}`} />
            <div className="rating">
                <img src="./Images/star.png"/>
                <span>{props.rating}</span>
                <span className="grey ">({props.reviewCount}) •</span>
                <span className="grey ">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><b>From ${props.price}</b> / person</p>
        </div>
    )
}