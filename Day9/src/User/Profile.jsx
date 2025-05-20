import React from 'react'
import { useContext } from 'react'
import {UserContext} from '../Context/UserContext'
const Profile = () => {
    const {userName,setUserNamex}=useContext(UserContext)
  return (
    <div>
        {userName.name}
        <button onClick={setUserNamex}>Change Name</button>
    </div>
  )
}

export default Profile