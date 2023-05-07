import './App.css';
import {Row} from "./components/row/Row";
import {useState, useEffect} from "react";

function App() {

    const [rows, setRows] = useState({
        1: {
            "id": 1,
            "kg": 0,
            "grams": 0,
            "count": 0,
            "cumulativeCount": 0,
            "cumulativeWeightKg": 0,
            "cumulativeWeightGrams": 0,
        }
    })

    const [rowsChanged, setRowsChanged] = useState(false);

    useEffect(() => {
        if (rowsChanged) {
            addCumulativeWeightAndCountToRows(rows, setRows, setRowsChanged)
            setRowsChanged(false); // reset the state of rowsChanged
        }
    }, [rows, rowsChanged]);

    const addRow = () => {
        const keyList = Object.keys(rows).sort()
        const lastKey = keyList[keyList.length - 1]
        const newKey = parseInt(lastKey) + 1
        const newValue = {
            "id": newKey,
            "kg": 0,
            "grams": 0,
            "count": 0,
            "cumulativeCount": rows[lastKey].cumulativeCount,
            "cumulativeWeightKg": rows[lastKey].cumulativeWeightKg,
            "cumulativeWeightGrams": rows[lastKey].cumulativeWeightGrams,
        }
        const newListValue = {
            ...rows,
            [newKey]: newValue
        }
        setRows(newListValue)
        setRowsChanged(true)
    }

    const updateListObject = (row) => {
        const newListObject = {
            ...rows,
            [row.id]: row
        }
        setRows(newListObject)
        setRowsChanged(true)
    }

    return (
        <div className="App">
            <br/>
            <p className={"label"}>Cummulative coconut stuff</p>
            <br/>
            {
                Object.keys(rows).sort().map((key) => {
                    return <Row
                        key={key}
                        index={key}
                        row={rows[key]}
                        updateRows={updateListObject}
                    />
                })
            }
            <button className={"button"} onClick={addRow}>Add Row</button>
        </div>
    );
}


export default App;


const addCumulativeWeightAndCountToRows = (obj, setRows, setRowsChanged) => {
    let cumulativeCount = 0;
    let cumulativeWeightKg = 0;
    let cumulativeWeightGrams = 0;

    let newObject = {}

    Object.entries(obj).sort().forEach(([key, value]) => {
        cumulativeCount += value.count;
        cumulativeWeightKg += value.kg;
        cumulativeWeightGrams += value.grams;

        // Check if cumulative weight of grams exceeds 1 KG
        if (cumulativeWeightGrams >= 1000) {
            const excessGrams = cumulativeWeightGrams - 1000;
            const excessKg = Math.floor(excessGrams / 1000);
            cumulativeWeightKg += excessKg;
            cumulativeWeightGrams = excessGrams % 1000;
        }

        const newRowValue = {
            ...value,
            "cumulativeCount": cumulativeCount,
            "cumulativeWeightKg": cumulativeWeightKg,
            "cumulativeWeightGrams": cumulativeWeightGrams
        }

        const newListObject = {
            ...newObject,
            [key]: newRowValue
        }

        newObject = newListObject

    });

    setRows(newObject)
    // set the rowsChanged state to true to indicate that the rows state has changed
    setRowsChanged(true);
}