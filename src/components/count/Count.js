import "../../App.css"
import "./Count.css"

export const Count = ({count}) => {
    return (
        <div className={"count"}>
            <p className={"thick"}>{count}</p>
            <p className={"small-label"}>coconuts</p>
        </div>
    )
}
