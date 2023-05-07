import "./Board.css"
import {Weight} from "../weight/Weight";
import {Count} from "../count/Count";

export const Board = ({kg=0, grams=0, count=0}) => {
    return (
        <div className={"board"}>
            <Weight kg={kg} grams={grams}/>
            <Count count={count}/>
        </div>
    )
}