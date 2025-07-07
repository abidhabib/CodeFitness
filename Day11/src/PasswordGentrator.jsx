import React, { useState } from 'react'

function PasswordGentrator() {
    const [len, setlen] = useState(6)
    const [num, setnum] = useState(false)
    const [sym, setSym] = useState(false)
    const [password, setPassword] = useState('')
    console.log(len);
    const strAZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const strNum = '0123456789'
    const strSym = '@#$%^&*()_+~`|}{[]:;?><,./=';
    React.useEffect(() => {
        PasswordGenrator();
      }, []);
    
    const PasswordGenrator = () => {
        let pass=''
        let AllowedChar=strAZ
        if(num){
            AllowedChar+=strNum
        }
        if(sym){
            AllowedChar+=strSym
        }
      
    
        for (let i = 0; i < len; i++) {
            const charRandom = AllowedChar.charAt(Math.floor(Math.random() * AllowedChar.length))
            pass+=charRandom
        }
        setPassword(pass)

    }


        return (
            <section className='w-full h-72 bg-gray-800 flex flex-col items-center justify-center gap-3 '>
                <div className="flex gap-2">
                    <input type="text" value={password} className='form-input rounded-full p-2 bg-[#7f7f77] text-white ' />
                    <button className='btn bg-green-600 text-white  rounded-full px-4 py-2' onClick={PasswordGenrator}>Copy</button>
                </div>

                <div className="flex gap-2">
                    <div className="flex flex-col gap-1 justify-between">

                        <input type="checkbox" checked={num} id="num"onChange={
                            ()=>
                                {setnum(!num)        
                            PasswordGenrator(num)}} />
                        <label htmlFor="num" className='text-xs'>Number</label>
                    </div>
                    <div className="flex flex-col gap-1">

                        <input
                            type="range"
                            className="form-range"
                            min="1"
                            max="24"
                            value={len}
                            onChange={(e) => {
                                const newLen = Number(e.target.value);
                                setlen(newLen);
                                PasswordGenrator();
                              }}
                        />
                        <label htmlFor="range" className="text-xs text-center">
                            {len} / 24
                        </label>                </div>




                    <div className="flex flex-col gap-1">
                        <input type="checkbox" checked={sym} id="sym"onChange={
                            (e)=>
                                {setSym(e.target.checked) 
                            PasswordGenrator(sym,len,e.target.checked)}} />
                        <label htmlFor="sym" className='text-xs'>Symbol</label>
                    </div>
                </div>
            </section>

        )
    }

    export default PasswordGentrator