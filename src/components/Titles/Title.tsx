import React from "react"
import "./title.css"

const Title = (props) => {
    return (
        <p id="title">
            {props.children}
        </p>
    )
}

export default Title