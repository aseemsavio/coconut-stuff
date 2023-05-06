import './App.css';
import {Row} from "./components/row/Row";
import {useState} from "react";

function App() {

    const [rows, setRows] = useState({
        1: {
            "kg": 0,
            "grams": 0,
            "count": 0
        },
        2: {
            "kg": 0,
            "grams": 0,
            "count": 0
        }
    })

    const updateRow = (event) => {
        const _rows = {
            ...rows,
            "a": ""
        }
        setRows(_rows)
    }

    const updateList = (row) => {

    }
  
    return (
        <div className="App">
            <p>Hello World</p>
            {
                Object.keys(rows).sort().map((key) => {
                    return <Row
                        key={key}
                        index={key}
                        row={rows[key]
                        } />
                })
            }
            <button onClick={updateRow} >Add Row</button>
        </div>
    );
}


export default App;
