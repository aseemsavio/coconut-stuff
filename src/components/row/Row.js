import "./Row.css"
import {NumericInput} from "../input/NumericInput";
import {Board} from "../board/Board";
import {useState} from "react";

export const Row = ({index, row, updateRows}) => {

    const [rowValue, setRowValue] = useState({
        "id": index,
        "kg": row.kg,
        "grams": row.grams,
        "count": row.count,
        "cumulativeCount": row.cumulativeCount,
        "cumulativeWeightKg": row.cumulativeWeightKg,
        "cumulativeWeightGrams": row.cumulativeWeightGrams
    })

    const parseNum = (number) => {
        try {
            console.log(number)
            if (isNaN(parseInt(number))) {
                return 0
            } else {
                return parseInt(number)
            }
        } catch (error) {
            return 0
        }
    }

    const changeHandler = (e) => {

        const updatedRow = {
            ...rowValue,
            [e.target.name]: parseNum(e.target.value)
        }
        console.log(updatedRow)
        setRowValue(updatedRow)
        updateRows(updatedRow)
    }

    return (
        <div className={"row"}>
            <NumericInput name={"kg"} label={"Kg"} onChange={changeHandler} value={rowValue.kg}/>
            <NumericInput name={"grams"} label={"Grams"} onChange={changeHandler} value={rowValue.grams}/>
            <NumericInput name={"count"} label={"Count"} onChange={changeHandler} value={rowValue.count}/>
            <Board kg={row.cumulativeWeightKg} grams={row.cumulativeWeightGrams} count={row.cumulativeCount} />
        </div>
    )
}
