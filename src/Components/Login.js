import React, {useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
function Login() {
document.title = 'EG - Sign up';

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [ConfirmPassword,setConfirmPassword] = useState("")
    const [click,setClick] = useState(false)
    const [Data,setData] = useState("")
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [val,setVal] = useState(false);

    function handleTextChange1(text) {
      setVal(text);
      if(text!=="") {
        setIsActive1(true);
      }
      else {
        setIsActive1(false);
      }
    }
    function handleTextChange2(text) {
        setVal(text);
        if(text!=="") {
          setIsActive2(true);
        }
        else {
          setIsActive2(false);
        }
    }
    function handleTextChange3(text) {
        setVal(text);
        if(text!=="") {
          setIsActive3(true);
        }
        else {
          setIsActive3(false);
        }
    }

    const handleSubmit = (event) => {
        const info = {email:email,password:password};
        console.log(info);
        const emailid = {email:email}
        const pass = {password:password}
        const confirmpass = {ConfirmPassword:ConfirmPassword}
        event.preventDefault();
    }
    
    const PasswordChange = (e) => {
        setPassword(e.target.value);
        handleTextChange2();
    }

    const ConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        handleTextChange3();
    }

    const handelEmailchange = (event) => {
        setEmail(event.target.value);
        handleTextChange1();
    }

    const handleClick = () => {
        setClick(!click)
    }



  return (
    <>
        <div className='container'>
            <img src='\images\Frame 2 1.png' alt='EG' className='logo-image' />
            <p className='quote'>Begin the journey towards a better you with this first step.</p>
            <div className='main-container'>

                <div className='signin-options'>
                    <button><a href='#'><FcGoogle/><span>Sign up with Google</span> </a></button>
                    <button><a href='#'><img src='\images\icons8-microsoft-32.png' className='icon-signin'/><span>Sign up with Microsoft</span></a></button>
                    <button><a href='#'><img src='\images\icons8-linkedin-circled-32.png' className='icon-signin'/><span>Sign up with linkedin</span></a></button>
                </div>
                <div className='partion'>
                    <div className='line'></div>
                    <p>or</p>
                    <div className='line'></div>
                </div>
                <form action='' onSubmit={handleSubmit} >
                    <div className='email'>
                        <div className='float-label'>
                            <input type='email' value={email}  onChange={handelEmailchange} required/>
                            <label className={isActive1 ? "Active": ""} htmlFor='email' >
                                Email
                            </label>
                        </div>
                    </div>


                    <div className='password'>
                        <div className='float-label'>
                        <i className={click ? "fa-solid fa-eye-slash icon-1" :"fa-solid fa-eye icon-1"} onClick={handleClick}></i>
                            <input type={click ? "text" :"password"} value={password}  onChange={PasswordChange} minLength='6' required/>
                            <label className={isActive2 ? "Active": ""} htmlFor='email'>
                                Password
                            </label>
                        </div>
                    </div>
                    <div className='password'>
                        <div className='float-label'>
                            <input type='password' value={ConfirmPassword}  onChange={ConfirmPasswordChange} minLength='6' required/>
                            <label className={isActive3 ? "Active": ""} htmlFor='email'>
                                Confirm Password
                            </label>
                        </div>
                    </div>

                    <button type='submit'>continue</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login