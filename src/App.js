import './App.css';
import {Row} from "./components/row/Row";
import {useState} from "react";

function App() {

    const [rows, setRows] = useState({
        1: {
            "id": 1,
            "kg": 0,
            "grams": 0,
            "count": 0
        }
    })

    const addRow = () => {
        const keyList = Object.keys(rows).sort()
        const lastKey = keyList[keyList.length - 1]
        const newKey = parseInt(lastKey) + 1
        const newValue = {
            "id": newKey,
            "kg": 0,
            "grams": 0,
            "count": 0
        }
        const newListValue = {
            ...rows,
            [newKey]: newValue
        }
        setRows(newListValue)
    }

    const updateListObject = (row) => {
        const newListObject = {
            ...rows,
            [row.id]: row
        }
        setRows(newListObject)
    }

    return (
        <div className="App">
            <p>Hello World</p>
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
            <button onClick={addRow}>Add Row</button>
            <p>{JSON.stringify(rows)}</p>
        </div>
    );
}


export default App;
