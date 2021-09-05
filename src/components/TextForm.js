import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    // string 'enter text here' is the default value for the state defined in the hook.

    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase', 'success');
    };

    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'success');
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text cleared', 'success');
    };

    const handleCopy = () => {
        const text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard', 'success');
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra spaces removed', 'success');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} rows="8" onChange={handleOnChange} value={text} placeholder='Enter text here'></textarea>
                </div>
                <button className='btn btn-primary mx-2 my-2' onClick={handleUpperCaseClick}>Convert to uppercase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleLowerCaseClick}>Convert to lowercase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
                {/* mx-2 bootstrap class gives margin in x  */}
            </div>

            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>Your text summary</h3>
                {/* text.split gives array also note that .split('') makes array length = 1. Therefor space will be counted as a word */}
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read.</p>

                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Enter something in text box above to preview it here'}</p>
            </div>
        </>
    )
}
