import React from "react"
import Nav from "./components/Navbar"
import Card from "./components/Card"
import DataArray from "./data"
import "./styles.css"

export default function App() {
   
    const mappedData = DataArray.map(item => {
        return <Card 
        key = {item.id}
        {...item}
        />
    })
    return (
        <>
            <Nav/>
            <img className="bg-image" src="../view.jpg" alt="background of mountain view"/>
            <section className="cards-list">{mappedData}</section>
        </>
    )
}