import React, { useContext } from 'react'
import './TodoHead.css'
import sun from '../../Assets/images/sun.svg'
import moon from '../../Assets/images/moon.svg'
import { ThemeContext } from '../../Context/ThemeContext'

export default function TodoHead() {

  const { theme, setTheme } = useContext(ThemeContext)


  return (
    <div className="title-block">
          <h1>TODO</h1>
          <button 
              type='button'
              onClick={() => theme === 'dark' 
                ? setTheme('light')
                : setTheme('dark')
              }>
            {
              theme === 'dark'
                ? <img src={sun} alt="bouton light mode" />
                : <img src={moon} alt="bouton dark mode" />
            }
          </button>
    </div>
  )
}
