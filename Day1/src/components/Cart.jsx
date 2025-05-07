import React from 'react'

const Cart = () => {

const products0 = ['Product 0','Product 1','Product 2','Product 3','Product 4','Product 5','Product 6','Product 7','Product 8','Product 9','Product 101']
const products1=['Product 1','Product 2','Product 3','Product 4','Product 5','Product 6','Product 7','Product 8','Product 9','Product 101']
const products=[...products0,...products1].filter((items,index,array)=> array.indexOf(items)===index)
const fliterdProducts = [...products0,...products1].filter((items,index,array)=>  array.indexOf(items)===index)
const newSetArry=[...new Set([...products0,...products1])]
console.log(newSetArry)
console.log(fliterdProducts)
return (
    
<section>
<h1>Cart</h1>

{

products.length > 0 ? (
    products.map((products,index)=>{
    return <p key={index}>{products}</p>

})

):(
    <p>No Products Found</p>
)



}




    
</section>


  )
}

export default Cart