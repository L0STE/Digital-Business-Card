import React from "react"
import L0STE from "./L0ste.png"
import mail from "./mail.png"
import linkedin from "./linkedin.png"

export default function Info() {
    return (
        <div className="info">
            <img src = { L0STE } className="profileph"/>
            <div className="nameAndJob">
                <h1>L0STE</h1>
                <h2>Fronte End Developer</h2>
            </div>

            <div className="site">
                <p>Mysite@example.com</p>
            </div>
            
            <div className="button">
                <button className="mail"> <img src= { mail } />Email</button>
                <button className="linkedin"> <img src= { linkedin } />Linkedin</button>
            </div>
        </div>
    )
}