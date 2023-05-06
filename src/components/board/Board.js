import "./Board.css"
import {Weight} from "../weight/Weight";
import {Count} from "../count/Count";

export const Board = () => {
    return (
        <div className={"board"}>
            <Weight kg={2} grams={123}/>
            <Count count={2}/>
        </div>
    )
}