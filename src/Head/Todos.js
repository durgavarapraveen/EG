import React from 'react'

export const Todos = ({todos,deletehandler}) => {
  return (
    <div>
        {todos.map((todo,index) =>
        <div className='guidee-goals-order' key={index}>
            <p className='guidee-goals-p1'>{todo.info.selectedOption}</p>
            <p className='guidee-goal-date'>{todo.info.lastDate}</p>
            <button className='guidee-todolist-button' onClick={() => deletehandler(index)}><i class="fa-solid fa-xmark guidee-goal-icon"></i></button>

        </div>  )}
    </div>
  )
}