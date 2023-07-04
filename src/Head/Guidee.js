import React, {useState} from 'react';
import Select from 'react-select';
import './Guidee.css';
import { Todos } from './Todos';

function Guidee() {
    
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
    setSelectedOption(""); // Assuming `setSelectedOption` is the function to update the selected option state
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
          <p className='quote-Name'>Let's get the guidance for your future achievements🏆.</p>
          <div className='main-container-guidee'>
            <form onSubmit={handleSubmit}>
              <div className='guidee-form'>
                <div className='guidee-goals'>
                  <label>Fields trying to achieve</label>
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
                <div className='guidee-enddate'>
                  <label>Deadline</label>
                  <input type='date' value={lastDate} onChange={(e) => setLastDate(e.target.value)} required/>
                </div>
                <input type='submit' value='Add' className='guidee-form-add'  />
              </div>
            </form>
            <div className='guidee-goals-list'>

              <Todos todos={todoList} deletehandler={handleDelete} />


            </div>
          </div>
        </div>
    </div>
    )
}

export default Guidee