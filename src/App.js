import './App.css';
import {Row} from "./components/row/Row";
import {useState} from "react";

function App() {

    const [rows, setRows] = useState([
        {
            "kg": 3,
            "grams": 234
        },
        {
            "kg": 4,
            "grams": 678
        },
    ])
  
    return (
        <div className="App">
            <p>Hello World</p>
            {
                rows.map(r => {
                    return <Row/>
                })
            }
        </div>
    );
}


export default App;
