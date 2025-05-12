import React from 'react'

const Popup = ({copy}) => {
    console.log(copy);
    
  return (

<section>

{
copy &&(
<div>
Copied To Clipboard !

    </div>
    
)}

</section>

)
}

export default Popup