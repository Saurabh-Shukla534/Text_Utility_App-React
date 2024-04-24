import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const [isBold, setBold] = useState(false);
    const handleUpChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to Uppercase', 'success');
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to Lowercase', 'success');
    }
    const handleBoldClick = () => {
        setBold(!isBold);
        props.showAlert('Text made bold', 'success');
    }
  return (
    <>
    <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleUpChange} id="myText" rows="8" style={{fontWeight: isBold ? 'bold' : 'normal', backgroundColor: props.mode === 'light' ? 'white' : 'rgb(1 20 100)', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>UPPERCASE</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>lowercase</button>
        <button className={`btn ${isBold ? 'btn-secondary' : 'btn-primary'} mx-1`} onClick={handleBoldClick} id="myBold"><b>Bold</b></button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h3>Your Text Summary</h3>
        <p>{text.length !== 0 ? (text.endsWith(' ') ? text.split(' ').length - 1 : text.split(' ').length) : 0} words {text.length} characters</p>
        <h4>Preview</h4>
        <p id='preview' style={{fontWeight: isBold ? 'bold' : 'normal'}}>{text}</p>
    </div>
    </>
  )
}
