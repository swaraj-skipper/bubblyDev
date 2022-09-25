import React from 'react'

export default function Login() {
    return (
        <>
        <div className='box'>

            <div className='login-card'>
                <h1 className='head'>Create new account<span className='dot'>.</span></h1>
                <form>
                <div className='together'>
                        <input className='nice' type="text" placeholder='First Name'></input>
                        <input className='nice' type="text" placeholder='Last Name'></input>
                    </div>
                    <div className='normal'>
                        <input type="email" placeholder='e-mail id'></input>
                        <input type="password" placeholder='Password'></input>
                    </div>
                    <div className='btn'>
                        <button className='register-btn'>Register</button>
                        <button className='login-btn'>Login</button>
                        
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
