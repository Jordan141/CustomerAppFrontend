import React from 'react'

export function login(props){
    return (
        <div>
        <h2>Welcome to my Customer Service Application.</h2>
        <h3> Please enter your login information below </h3>
        <input type="text" placeholder = 'E-mail' /><br/>
        <input type='password' placeholder = 'Password'/><br/>
        To begin, please login to your account. If you have yet to register, please click <a href='/login'>sign up </a> instead.<br/>
        <button type="button" className="login" onClick = {props.click}> Login </button>
        </div>
    )
}
