/* eslint-disable react/prop-types */
import "./card.css"

const Card = ({backColor, title, icon, number, children}) => {
    return (
        <div style={{backgroundColor: {backColor}}}>
            <div>
                <h2>{number}</h2>
                <img src={icon} />
            </div>
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default Card;