const Increment=({count,Onincrement,random})=>{


    return (


        <section>
            <h1>
                incrementing {count}
            </h1>
            <button onClick={Onincrement}>Increment</button>
            <h1>
                {random} !
            </h1>

        </section>
    )
}


export default Increment;
