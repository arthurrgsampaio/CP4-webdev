/* eslint-disable react/prop-types */
import "./card.css"

const Card = ({backColor, title, icon, number, children}) => {
    let color;
    switch(backColor) {
        case "red":
            color = "#F1C2B0";
            break;
        case "yellow":
            color = "#F9EB98";
            break;
        case "blue":
            color = "#6975E8";
            break;
        case "green":
            color = "#C0D9DD";
            break;
        default:
            color = "#808080";
            break;
    }

    const styles = {
        backgroundColor: color
    }
    

    return (
        <div style={styles} className="card">
            <div className="numberIcon"> 
                <h2>{number}</h2>
                <img src={icon} />
            </div>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}

export default Card;