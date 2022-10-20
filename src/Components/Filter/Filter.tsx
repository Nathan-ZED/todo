import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import Button from './Button/Button'
import './Filter.css'

export default function Filter() {

    const { theme } = useContext(ThemeContext)

    const [states, setStates] = useState<any[]>([
        {name:'All', active: true},
        {name:'Active', active: false}, 
        {name:'Completed', active: false},
    ])

    const removeAllActive = (name:string) => {
        const newState = [...states]
        newState.forEach(state => {
            state.name !== name 
            ? state.active = false 
            : state.active = true
        })
        setStates(newState)
    }

  return (
    <article className='filter'>
        <ul>
            {states.map((state:any) => (
                <Button
                    key={state.name}
                    name={state.name}
                    active={state.active}
                    remove={removeAllActive}
                />
            ))}
        </ul>
    </article>
  )
}
