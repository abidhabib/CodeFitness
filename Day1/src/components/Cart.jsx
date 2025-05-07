import React from 'react'

const Cart = () => {

const products = ['Product 0','Product 1   ','Product 2','Product 3','Product 4','Product 5','Product 6','Product 7','Product 8','Product 9','Product 101']
const products1=['Product 1','Product 2','Product 3','Product 4','Product 5','Product 6','Product 7','Product 8','Product 9','Product 101']
for(let i=0 ;i < products1.length;i++){
    products.push(products1[i])
}
console.log(products)
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