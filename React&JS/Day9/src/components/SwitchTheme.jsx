import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/Theme'

const SwitchTheme = () => {
    const {ChangeTheme}=useContext(ThemeContext)
  return (
    <button onClick={ChangeTheme}>Change Theme</button>
  )
}

export default SwitchTheme