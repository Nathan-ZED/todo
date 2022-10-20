import React, { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../../../Context/ThemeContext'
import { TodoContext } from '../../../Context/TodoContext'
import './TodoItem.css'

type Props = {
    todo: any,
}

export default function TodoItem({todo}:Props) {

    const {setComplete} = useContext(TodoContext)

    const {theme} = useContext(ThemeContext)

    const input:any = useRef()

    const handleTodo = (todo:any) => {
        setComplete(todo)
    }

  return (
            <>
                <div className={theme === 'dark' ? 'content dark' : 'content light'}>
                <label className="b-contain">
                    <span className={theme === "dark" ? "dark" : "light"}>{todo.todo}</span>
                    {
                        todo.completed
                            ?
                            <input 
                                type="checkbox"
                                ref={input} 
                                defaultChecked
                                className={theme}
                                onInput={() => handleTodo(todo)}
                                />
                            :
                            <input 
                                type="checkbox"
                                ref={input}
                                className={theme}
                                onInput={() => handleTodo(todo)}
                                />
                    }
                    <div className="b-input"></div>
                </label>
                </div>
            <hr/>
        </>
  )
}
