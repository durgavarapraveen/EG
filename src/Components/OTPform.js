import React, { useState, useRef, useEffect } from 'react';

function OtpForm(props) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRef = useRef([]);

  function handleOtpChange(event, index) {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });
      if (event.target.nextSibling && value) {
        event.target.nextSibling.focus();
      }
    }
  }

  function handleOtpKeyDown(event, index) {
    if (event.key === 'Backspace' && otp[index] === '') {
      if (inputRef.current[index - 1]) {
        inputRef.current[index - 1].focus();
      }
    }
  }

  useEffect(() => {
    const otpValue = otp.join('');
    props.onOtpChange(otpValue);
  }, [otp, props]);

  return (
    <div className='opt'>
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(event) => handleOtpChange(event, index)}
          onKeyDown={(event) => handleOtpKeyDown(event, index)}
          ref={(el) => (inputRef.current[index] = el)}
          style={{ width: '1.5em', height: '1.5em', margin: '0 0em 0 0.5em',paddingLeft: '1.2em' }}
        />
      ))}
    </div>
  );
}

export default OtpForm;
