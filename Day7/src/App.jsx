// // import React, { useState } from 'react'

// // const App = () => {
// // const [value,setvalue]=useState([{
// // name:"young"


// // }])
// // const updateName=(e )=>{
// //   e.preventDefault()
// //     console.log("updated");
// //    setvalue(e.target.value);
    
// // }
// // const CopyUpdatedName=(name)=>{
// //     console.log(name);
// //     navigator.clipboard.writeText(name)
    
// // }
// // console.log(value);

// //   return (



// // <div>
// // <p>{value}</p>
// // <input type="text" onChange={updateName}  />
// // <button onClick={updateName}>Update</button>
// // <button onClick={CopyUpdatedName()}>Copy</button>
// // </div>

// //   )
// // }

// // export default App



// import React, { useState } from 'react'

//  const App = () => {
// const [value,setvalue]=useState('red')
// console.log(value);

//   return (
//     <div style={{backgroundColor:value, width:"100%", height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.5)",transition:"all 0.3s ease-in-out",cursor:"pointer"}}>

// <button onClick={()=>{
// setvalue(value==='red'?'green':'red')
// }}>
//   Click
// </button>
//     </div>
//   )
// }


// export default App

import React, { useState } from 'react'

const App = () => {
  const [dark , setDark]=useState(false)
const changeBg=()=>setDark(!dark)

  document.body.style.backgroundColor=dark?'black':'white'


  return (
    <div>
      
<h1>
  {dark?'dark':'light'}
</h1>
<button onClick={changeBg}>
  {dark?'dark':'light'}
</button>


    </div>

  )
}

export default App