import React,{useState} from 'react'
import './Name.css'
import {Link} from 'react-router-dom'


function Name() {
document.title = "EG - Personal-Info";

    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [gender,setGender] = useState("")
    const [DOB,setDOB] = useState("")
    const [photo,setPhoto] = useState("")
    const [photoPreview,setPhotoPreview] = useState("")

    const handlePhotoChange = (event) => {
        const selectedPhoto = event.target.files[0];
        setPhoto(selectedPhoto);
        const reader = new FileReader();
        reader.onload = () => {
        setPhotoPreview(reader.result);
        };
        reader.readAsDataURL(selectedPhoto);
    }

    const handleSubmit = (event) => {
        const info = {fname:fname,lname:lname,gender:gender,DOB:DOB,photo:photo}
        console.log(info);
        event.preventDefault();
    }

  return (
    <div className='container-Name'>
        <img src='\images\Frame 2 1.png' alt='EG' className='logo-image-Name' />
        <p className='quote-Name'>Let's get the help for your name on the success page</p>
        <div className='main-container-Name'>
            <form action='' onSubmit={handleSubmit}>
                <div className='fname'>
                    <label htmlFor='fname'>First name</label>
                    <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />
                </div>
                <div className='lname'>
                    <label htmlFor='lname'>Last name</label>
                    <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} required />

                </div>
                <div className='gender'>
                    <label htmlFor='gender'>Gender</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value=""> choose your option</option>
                        <option value='male' >Male</option>
                        <option value='female' >Female</option>
                        <option value='other' >Other</option>
                    </select>
                </div>
                <div className='dob'>
                    <label htmlFor='DOB'>Date of Birth</label>
                    <input type='date' name='DOB' value={DOB} onChange={(e) => setDOB(e.target.value)}  />
                </div>
                <div className='flex'>
                    <div className='photo'>
                        <label htmlFor='photo'>Profile Picture</label>
                        <input type='file' name='photo' accept="image/*" onChange={handlePhotoChange}/>
                    </div>
                    <div className='img-profile'>
                        {photoPreview && (
                            <div>
                                <img src={photoPreview} alt="Preview of uploaded photo" />
                            </div>
                        )}
                    </div>
                </div>

                <Link to='PersonalInfo_1'>
                    <button type='submit'>continue</button>
                </Link>
            </form>
        </div> 
    </div>
  )
}

export default Name