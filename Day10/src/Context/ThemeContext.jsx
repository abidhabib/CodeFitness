import { createContext, useState } from "react";

export const ThemeContext=createContext();



    const ThemeProvider=({children})=>{

const [isDark , setIsDark]=useState('black');

const ChangeTheme=()=>{
setIsDark(prev=>!prev)
document.body.style.backgroundColor=isDark?'black':'white'   
document.body.style.color=isDark?'white':'black'

}
return (
        <ThemeContext.Provider value={{ChangeTheme}}>

{children}

        </ThemeContext.Provider>


)



    }
    
    export default ThemeProvider