// // const ArrayRender = () => {

// // const name=["Ellio","John","Doe"];
// // const age=[20,21,22];

// // return (

// // <section>

// // <h2>Name&Age</h2>
// // {

// // name.map(
// // (i) =>{

// // return <p>{i}</p>


// // }

// // )


// // }

// // {
// // age.map (

// // (i) =>{



// //     return <p>{i}</p>
// // }

// // )


// // }


// // </section>

// // )



// // }
// // export default ArrayRender;


// const ArrayRender = () => {
//     const UerInfo = [

// {
//     id:1,
//     name:"Ellio",
//     age:20,
//     gender:"male",
//     country:"India"


// },
// {
//     id:2,
//     name:"John",
//     age:21,
//     gender:"male",
//     country:"India"


// },
// {
//     id:3,
//     name:"Doe",
//     age:22,
//     gender:"male",
//     country:"India"


// }


//     ]
//     return(
// <section>
// <h2>UserInfo</h2>
// {

// UerInfo.map(

// (i)=>{
//     return <p key={i.id}>User Name{i.name} & User Orign {i.country} & User Age {i.age} & User Gender {i.gender} and index {i.id}</p>
// }

// )
// }
// </section>


//     )


// }

// export default ArrayRender;
const ArrayRender = () => {
    const UerInfo = [

{
    id:1,
    name:"Ellio",
    age:20,
    gender:"male",
    country:"India"


},
{
    id:2,
    name:"John",
    age:21,
    gender:"male",
    country:"India"


},
{
    id:3,
    name:"Doe",
    age:22,
    gender:"male",
    country:"India"


}


    ]
    return(
<section>
<h2>UserInfo</h2>
{

UerInfo.map(

({name,country,age,gender,id})=>{
    return <p key={id}>User Name{name} & User Orign {country} & User Age {age} & User Gender {gender} and index {id}</p>
}

)
}
</section>


    )


}
export default ArrayRender;