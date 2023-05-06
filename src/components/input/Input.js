import "./Input.css"
import "../../App.css"

export const Input = ({ label, type, placeholder, value, onChange }) => {
    return (
        <div className={"input"}>
            <p className={"label"}>{label}</p>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                style={{ 
                    padding: '0.5rem', 
                    borderRadius: '0.25rem', 
                    border: '0.3px solid gray',
                    fontSize: '1rem',
                    outline: 'none'
            }}
            />
        </div>
        );
};