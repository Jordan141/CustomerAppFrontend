import React from 'react'

export function signUp(props){  

    return( 
        <div className='signupArea'>
            <h2>Welcome to my Customer Service Application.</h2>
            <h3> Please enter your login information below </h3>
            <input type="text" placeholder = 'Firstname' /> <input type="text" placeholder = 'Surname' /><br/>
            <input type="text" placeholder = 'E-mail' /><br/>
            <input type='password' placeholder = 'Password'/><br/>
            <input type='password' placeholder = 'Confirm password'/><br/>
            Please enter your information and click signup to register for an account. If you already have an account, <a href='/register'>click here</a> instead.<br/>
            <button type="button" className="signup" onClick={this.props.onClick}> Sign up </button>
        </div>
    )
}