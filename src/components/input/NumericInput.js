import "./Input.css"
import "../../App.css"

export const NumericInput = ({ label, name, placeholder, value, onChange }) => {
    return (
        <div className={"input"}>
            <p className={"label"}>{label}</p>
            <input className={"inner-input"}
                pattern="[0-9]*"
                name={name}
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
            />
        </div>
        );
};