import React, { useState } from 'react'

function Card({color,title,description='lore ipsum dolor sit amet consectetur adipisicing elit.',_id}) {
    const [_btnColor , set_btnColor]=useState('bg-sky-600')
    const changeBg=()=>{    
        console.log(_btnColor);
document.body.style.backgroundColor=color
        return(
        set_btnColor(color)
            
        )
    }
  return (

<>
        <div className="w-72 h-72 bg-gray-800 rounded-3xl text-gray-200 p-6 flex flex-col gap-4 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-1">
        <div className="w-full h-48 bg-sky-400 rounded-2xl overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-sky-400 to-blue-600 opacity-90"></div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-gray-400">{description}</p>
        </div>
        
        <button 
          className={`${_btnColor} mt-2 hover:bg-sky-500 text-white font-bold py-2 px-6 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50`}
          onClick={ () => changeBg()}
        >
          See more { _id}
        </button>



      </div>           




</>

                       
  )
}

export default Card