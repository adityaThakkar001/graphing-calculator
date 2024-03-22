import React, { useState } from 'react';
import "./InputField.css";

const InputField = () => {
    const [inputFunction, setInputFunction] = useState('');

    const handleAddFunction = () => {
        
    };

    return (
        <div className="input-field">
            <div className="input-field-top">
                <h2>Graphing Calculator</h2>
                <input
                    type="text"
                    placeholder="Enter a function"
                    value={inputFunction}
                    onChange={(e) => setInputFunction(e.target.value)}
                />
                <button onClick={handleAddFunction}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M20 11H13V4c0-.55-.45-1-1-1s-1 .45-1 1v7H4c-.55 0-1 .45-1 1s.45 1 1 1h7v7c0 .55.45 1 1 1s1-.45 1-1v-7h7c.55 0 1-.45 1-1s-.45-1-1-1z"/>
                    </svg>
                </button>
            </div>
            <div className="input-functions">
                {}
            </div>
        </div>
    );
}

export default InputField;
