import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import { TodoContext } from '../../Context/TodoContext'
import './TodoInput.css'

export default function TodoInput() {

    const {newTodo } = useContext(TodoContext);
    const {theme} = useContext(ThemeContext);
    const [input, setInput] = useState('')

    const handleInput = (input:string) => {
        newTodo(input)
        setInput('')
    }

  return (
    <div className={theme === "dark" ? 'input-wrapper dark' : 'input-wrapper light'}>
        <button 
            type='button' 
            className='round'
            onClick={() => handleInput(input)}>
                +
            </button>
        <input 
            type="text"
            placeholder="Create a new todo"
            value={input}
            onInput={(e:any) => setInput(e.target.value)}
            />
    </div>
  )
}
