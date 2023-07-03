import React,{useState} from 'react'
import { useEffect } from 'react';
import './PersonalInfo_1.css'
import { useFormik } from "formik";
import Select from "react-select";
import csc from "country-state-city";
import { Country, State, City } from 'country-state-city';

function PersonalInfo_1() {
document.title = "EG - Personal Info"

    // const allCountries = Country.getAllCountries();

    // const [country,setCountry] = useFormik("India")
    // const [state,setState] = useFormik("")
    // const [city,setCity] = useFormik("")
    const [studyQuali,setStudyQuali] = useState("")
    const [jobQuali,setJobQuali] = useState("")
    const [Langauge,setLangauge] = useState("")
    const [hobby,setHobby] = useState("")

    const initialValues = {
        country: 'India',
        state: null,
        city: null
    }

    const countries = Country.getAllCountries();

    // const updatedCountries = countries.map((country) =>) 


    const handleSubmit = (event) => {
        const personalinfo_1 = {studyQuali:studyQuali,jobQuali:jobQuali,Langauge:Langauge,hobby:hobby}
        console.log(personalinfo_1)
        event.preventDefault();
    }

  return (
    <div className='container'>
        <img src='\images\Frame 2 1.png' alt='EG' className='logo-image-Name' />
        <p className='quote-Name'>Let's connect with achievers of similar background</p>
        <div className='main-container-PersonalInfo_1'>
            <form action='' onSubmit={handleSubmit}>

                <div className='address'>
                    <label htmlFor='address'>Address</label>
                    <div className='address-boxes'>
                        <div className='states'>
                            <label htmlFor='inputState'>State:</label>
                            {/* <Select id='state' name='state' value={value.state} /> */}
                        </div>
                        <div className='states'>
                            <label htmlFor='inputState'>District/City:</label>
                        </div>
                    </div>
                </div>
                <div className='qualification'>
                    <div className='study-quali'>
                        <label>Study Qualification</label>
                        <input type='text' required value={studyQuali} onChange={(e) => setStudyQuali(e.target.value)}/>
                    </div>
                    <div className='job-quali'>
                        <label>Job Qualification</label>
                        <input type='text' required value={jobQuali} onChange={(e) => setJobQuali(e.target.value)}/>
                    </div>
                </div>
                <div className='languages'>
                    <label>Languages fluent in</label>
                    <input type='text' required value={Langauge} onChange={(e) => setLangauge(e.target.value)}/>
                    
                </div>
                <div className='hobbies'>
                    <label>Hobbies</label>
                    <input type='text' required value={hobby} onChange={(e) => setHobby(e.target.value)} />
                </div>
                <button type='submit'>continue</button>
            </form>
        </div>
    </div>
  )
}

export default PersonalInfo_1