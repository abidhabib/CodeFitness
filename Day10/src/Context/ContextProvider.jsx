import { UserContext } from "./userContext";



const UseProvider = ({children})=>{


    return(
        <UserContext.Provider value={{
            userName:"Ellio"
            
            
            }}>
            {children}
        </UserContext.Provider>
    )
}
export default UseProvider