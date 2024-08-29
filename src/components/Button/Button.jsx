/* eslint-disable react/prop-types */
import "./button.css"

const Button = (props) => {
    return (
        <button className="buttons">
            {props.children}
        </button>
    )
}

export default Button;