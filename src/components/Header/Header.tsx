import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = ({ selected }) => {
    switch (selected) {
        case "home":
            return (
                <div id="containerHeader">
                    <Link to="/" className="select selected">Home</Link>
                    <Link to="/sobre" className="select">Sobre</Link>
                    <Link to="/contato" className="select">Contato</Link>
                </div>
            )

        case "sobre":
            return (
                <div id="container">
                    <Link to="/" className="select">Home</Link>
                    <Link to="/sobre" className="select selected">Sobre</Link>
                    <Link to="/contato" className="select">Contato</Link>
                </div>
            )

        case "contato":
            return (
                <div id="container">
                    <Link to="/" className="select">Home</Link>
                    <Link to="/sobre" className="select">Sobre</Link>
                    <Link to="/contato" className="select selected">Contato</Link>
                </div>
            )
    }
}

export default Header;