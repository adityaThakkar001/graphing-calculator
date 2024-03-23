import React, { useState } from 'react';
import "./InputField.css";

const InputField = () => {
    const [inputFunctions, setInputFunctions] = useState([]);
    const [currentInput, setCurrentInput] = useState('');
    const [isInputVisible, setIsInputVisible] = useState(false); // Track input visibility

    const handleAddFunction = () => {
        setIsInputVisible(true); // Show input field when button is clicked
    };

    const handleConfirmFunction = () => {
        setInputFunctions(prevFunctions => [...prevFunctions, currentInput]);
        setCurrentInput('');
    };

    const handleDeleteFunction = (index) => {
        setInputFunctions(prevFunctions => prevFunctions.filter((_, i) => i !== index));
    };

    return (
        <div className="input-field">
            <div className="input-field-top">
                <h2>Graphing Calculator</h2>
                <button onClick={handleAddFunction}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M20 11H13V4c0-.55-.45-1-1-1s-1 .45-1 1v7H4c-.55 0-1 .45-1 1s.45 1 1 1h7v7c0 .55.45 1 1 1s1-.45 1-1v-7h7c.55 0 1-.45 1-1s-.45-1-1-1z"/>
                    </svg>
                </button>
                {isInputVisible && ( // Render input field conditionally
                    <div>
                        <input className="input-fn"
                            type="text"
                            placeholder="Enter a function"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                        />
                        <button onClick={handleConfirmFunction}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M9 16.2l-3.7-3.7 1.4-1.4 2.3 2.3 4.9-4.9 1.4 1.4-6.3 6.3z"/>
                            </svg>
                        </button>
                    </div>
                )}
            </div>
            <div className="input-functions">
                {inputFunctions.map((func, index) => (
                    <div key={index}>
                        {func}
                        <button onClick={() => handleDeleteFunction(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InputField;
