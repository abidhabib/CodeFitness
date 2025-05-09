const Decement=({count,Ondecrement})=>{


    return (


        <section>
            <h1>
                Decrementing {count}
            </h1>
            <button onClick={Ondecrement}>Decrement</button>
        

        </section>
    )
}
export default Decement;