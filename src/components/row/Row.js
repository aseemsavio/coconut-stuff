import "./Row.css"
import {Input} from "../input/Input";
import {Board} from "../board/Board";

export const Row = () => {
    return (
        <div className={"row"}>
            <Input label={"Kg"}/>
            <Input label={"Grams"}/>
            <Input label={"Count"}/>
            <Board/>
        </div>
    )
}