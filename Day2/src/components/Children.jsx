import React from 'react'

const Children = ({children}) => {
  return (
    <section style={
        {
            backgroundColor:"red", // i need glass effect card
            color:"white",
            padding:"10px",
            margin:"10px",
            borderRadius:"10px",
            boxShadow:"0 0 10px rgba(0,0,0,0.5)",
            transition:"all 0.3s ease-in-out",
            cursor:"pointer",

        }
    }>

    {children}


    </section>
  )
}

export default Children