import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState();
    // string 'enter text here' is the default value for the state defined in the hook.

    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} placeholder='Enter text here'></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpperCaseClick}>Convert to uppercase</button>
        </div>
    )
}
