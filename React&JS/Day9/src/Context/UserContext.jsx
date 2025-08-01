 import { createContext,useState } from "react";
 export const UserContext=createContext()
export const UserProvider=({children})=>{

const [userName,setUserName]=useState({name:"abid habib",age:20,country:"pakistan"})
const setUserNamex = () => {
    setUserName(prev =>
                prev.name==="abid habib"?{  name:"habib"} :{name:"abid habib"}
  )};
  
return(
<UserContext.Provider 
value={
    
    {userName,setUserNamex}




}> 



{children}


</UserContext.Provider>



)






 }

 export default UserProvider