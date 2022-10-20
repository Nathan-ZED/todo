import React, { useContext } from 'react'
import './Background.css'
import bgDDark from '../../Assets/images/bgDDark.jpg'
import bgDLight from '../../Assets/images/bgDLight.jpg'
import bgMDark from '../../Assets/images/bgMDark.jpg'
import bgMLight from '../../Assets/images/bgMLight.jpg'
import { isMobile } from 'react-device-detect'
import { ThemeContext } from '../../Context/ThemeContext'

export default function Background() {

  const { theme } = useContext(ThemeContext)

  return (
    <header className={'top-bg'}>
        {
          isMobile ?
            theme === "dark" 
              ? <img src={bgMDark} alt='dark background'/> 
              : <img src={bgMLight} alt='light background'/>
          : null
        }
        {
          !isMobile ?
            theme === "dark" 
              ? <img src={bgDDark} alt='dark background'/> 
              : <img src={bgDLight} alt='light background'/>
          : null
        }
        
    </header>
  )
}
