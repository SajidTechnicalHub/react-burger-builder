import React from 'react'
import { useState } from 'react/cjs/react.development'

    const InputCss = {
        backgroundColor: 'White',
    }
    const InputCss1 = {
        backgroundColor: '#cccccc',
    }

const Login = () => {
    const [register, setRegister] = useState('SIGNING')
    const [emailcss, setEmailCss] = useState(InputCss);
    const [passwordcss, setPasswordCss] = useState(InputCss);
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const InputEvent = (e) =>{
        const {name, value} = e.target;
        setInput(()=>{
            return{ ...input, [name]:value }
        })
    }
    const SubmitEvent = (e) => {
        e.preventDefault()
        alert( `Your Email: ${input.email} and Password is: ${input.password} `)
        setInput({
            email: '',
            password: ''
        })
    }
    const RegisterToggle = () => {
        if(register==='SIGNING'){
            setRegister('REGISTER')
        }else{
            setRegister('SIGNING')
        }
        
    }
    const EmailCssChange = () =>{
        setEmailCss(InputCss1);
        setPasswordCss(InputCss);
    }
    const PasswordCssChange = () =>{
        setEmailCss(InputCss);
        setPasswordCss(InputCss1);
    }
    return (
        <>
             <div className="  py-2 mt-5 d-flex flex-row justify-content-center align-align-items-md-center ">
                <form onSubmit={SubmitEvent} className="d-flex flex-column  login-form">
                    
                    <input type="email" name="email" value={input.email} onChange={InputEvent} style={emailcss} onClick={EmailCssChange} autoComplete="off" placeholder="E-mail Address" required className="mt-5  m-3"/>
                    <input type="password" name="password" value={input.password} style={passwordcss} onChange={InputEvent} onClick={PasswordCssChange} placeholder="Password" required className=" m-3"/>
                    <button type="submit" className="mx-auto" >SUBMIT</button>
                    <span  type="submit" className="mx-auto" onClick={RegisterToggle} >{register}</span>
                </form>
            </div>
        </>
    )
}

export default Login;
