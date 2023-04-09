import React,{useState} from 'react';
import './TextInput.css';

function TextInput({type,label,minlen}) {

    const [isActive, setIsActive] = useState(false);
    const [value,setValue] = useState('');

    function handleTextChange(text) {
      setValue(text);

      if(text!=="") {
        setIsActive(true);
      }
      else {
        setIsActive(false);
      }
    }

  return (
    <div className='float-label'>
        <input type={type} value={value} onChange={(e) => handleTextChange(e.target.value)} minLength={minlen} required/>
        <label className={isActive ? "Active": ""} htmlFor='email'>
            {label}
        </label>
    </div>
  )
}

export default TextInput