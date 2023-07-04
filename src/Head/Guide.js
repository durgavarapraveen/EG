import React, {useState} from 'react';
import Select from 'react-select';
import './Guide.css';
import { Todos } from './Todos';
import {Link} from 'react-router-dom';

function Guide() {
    
  const [selectedOption, setSelectedOption] = useState("");
  const [lastDate,setLastDate] = useState("")
  const [todoList,setTodoList] = useState([])


  const options = [
    { value: "Google Intern", label: "Google Intern" },
    { value: "Amazon Intern", label: "Amazon Intern" },
    { value: "Microsoft Intern", label: "Microsoft Intern" },
    {
      value: "Oracle Intern",
      label: "Oracle Intern"
    },
    {
      value: "TCS Intern",
      label: "TCS Intern"
    }
  ];
  const handleTypeSelect = e => {
    setSelectedOption(e.value);
    console.log(e)
  };


  const handleSubmit = (event) => {
    const info = { selectedOption: selectedOption, lastDate: lastDate };
    console.log(info);
    event.preventDefault();
  
    const newtodo = {
      id: todoList.length + 1,
      info: info,
    };
    const newTodoList = [...todoList,newtodo]
    setTodoList(newTodoList);
    setSelectedOption(""); 
    setLastDate("");
  }

  const handleDelete = (indexvalue) => {
    const newTodos = todoList.filter((todo,index) => index!== indexvalue);
    setTodoList(newTodos)

  }
  

  return (
    <div>
        <div className='container'>
          <img src='\images\Frame 2 1.png' alt='EG' className='logo-image-Name' />
          <p className='quote-Name'>Let's guide with your achievements and experience.</p>
          <div className='main-container-guidee'>
            <form onSubmit={handleSubmit}>
              <div className='guidee-form'>
                <div className='guide-goals'>
                  <label>Fields achieved</label>
                  <Select
                      options={options}
                      onChange={handleTypeSelect}
                      value={options.filter(function(option) {
                        return option.value === selectedOption;
                      })}
                      isSearchable={true}
                      label="Single select"
                      menuPlacement='auto'
                  />
                </div>
                <div className='guide-enddate'>
                  <label>Proof of achievement</label>
                  <input type='file' value={lastDate} onChange={(e) => setLastDate(e.target.value)} required/>
                </div>
                <input type='submit' accept='.doc,.docx,.xml,.jpg,.pdf,' value='Add' className='guidee-form-add' multiple  />
              </div>
            </form>
            <div className='guidee-goals-list'>
                <div className='guidee-goals-list-scrool'>
                  <Todos todos={todoList} deletehandler={handleDelete} />        
                </div>
            </div>
            <div className='guidee-change-button'>
              <Link to='Guide'>
                <button>continue</button>
              </Link>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Guide