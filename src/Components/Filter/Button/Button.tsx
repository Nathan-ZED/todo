import React, { useState, useContext } from 'react'
import { ThemeContext } from '../../../Context/ThemeContext'
import { TodoContext } from '../../../Context/TodoContext'
import Filter from '../Filter'

import './Button.css'

type Props = {
    name: string,
    active: boolean,
    remove: Function,
}

export default function Button({name, active, remove}:Props) {

    const { filter } = useContext(TodoContext)
    const { theme } = useContext(ThemeContext)


    const [activ, setActiv] = useState(active)

    const handleButton = (bool:boolean, name:string) => {
        setActiv(bool)
        remove(name)
        filter(name)
    }

  return (
    <li>
        {active 
            ? <button
                onClick={() => handleButton(!activ, name)}
                type='button'
                className={theme === "dark" ? 'active dark' : "active light"}>
                {name}
            </button>
            :
            <button
            onClick={() => handleButton(!activ, name)}
            className={theme === "dark" ? "dark" : "light"}
            type='button'>
            {name}
        </button>
        }
    </li>
  )
}
