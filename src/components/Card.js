import React from "react"

export default function Card(props) {
    
    return(        
        <>
        <div className ="card">
            <img src={props.imageUrl}/>
            <div className="card--aside">
                <p className="card--location"><i className="fa-solid fa-location-dot"></i>{props.location}<a className="card--link" href={props.googleMapsUrl}>View on Google Maps</a></p>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--dates">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
        </>
        
        
    )
}