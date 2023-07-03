import React,{useState} from 'react';
import './MobileVerify.css';
import ReactOtpInput from './OTPform';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import OtpForm from './OTPform';
import {Link} from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';


function MobileVerify() {

document.title = "EG - Number Verification"

    const [otp, setOtp] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('India');
    const [captcha,setCaptcha] = useState(false);

  
    function handlePhoneChange(value) {
      setPhone(value);
    }

    function handleOtpChange(value) {
        setOtp(value);
        console.log(value);
    }
    

    function onChange(value) {
        console.log("Captcha Value",value);
        setCaptcha(!captcha)
    }

    const handleSubmit = (event) => {
        const info1 = {phone:phone}
        console.log(info1);
        console.log(captcha)
        event.preventDefault();
    }

  return (
    <div className='container-mobile'> 
        <img src='\images\Frame 2 1.png' alt='EG' className='logo-image' />
        <p className='quote'>Let's verify the unique you</p>

        <div className='main-container'>
            <form  action='' onSubmit={handleSubmit}>
                <div className='phone-number'>
                    <label>Phone number</label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={handlePhoneChange}
                        defaultCountry='IN'
                        required
                    />
                </div>

                <div className='otp'>
                    <label>OTP :</label>
                    <OtpForm onOtpChange={handleOtpChange} />
                </div>
                <div className='re'>
                    <ReCAPTCHA sitekey='6Le0EqglAAAAAAlqhbFe8dHVyWgT-LUYUVLtB_6N' onChange={onChange} className='recapcha'/>
                </div>

                {/* <ReCAPTCHA sitekey='6Le0EqglAAAAAAlqhbFe8dHVyWgT-LUYUVLtB_6N' onChange={onChange} className='recapcha'/> */}

                <Link to='/Name'>
                    <button type='submit'>continue</button>
                </Link>
            </form>
         </div>
    </div>
  );
}

export default MobileVerify