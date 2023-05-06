import "./Weight.css"
import "../../App.css"

export const Weight = ({kg, grams}) => {
    return (
        <div className={"weight"}>
            <p className={"thick"}>{kg}</p>
            <p className={"small-label"}>Kg</p>
            <p className={"thick"}>{grams}</p>
            <p className={"small-label"}>g</p>
        </div>
    )
}
