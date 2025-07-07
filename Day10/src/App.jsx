import React, { useContext } from 'react'
import  UseProvider  from './Context/ContextProvider'
import { UserContext }  from './Context/userContext'
import { ThemeContext } from './Context/ThemeContext'
import ThemeProvider from './Context/ThemeContext'

const OuterComponent = ()=>{
const {userName}=useContext(UserContext)
console.log(userName);
  return(

<section> {userName} </section>

  )
}
const ThemeChanger =()=>{
  const {ChangeTheme}=useContext(ThemeContext)



  return (

<section>
<button onClick={ChangeTheme}>Change Theme</button>
</section>

  )
}

const App = () => {

  return (

    <ThemeProvider>

<ThemeChanger/> 


  
  <UseProvider  >


<OuterComponent/>

  </UseProvider>
  </ThemeProvider>
  )
}

export default App