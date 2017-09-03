const React = require('react')
const logo = require('./../logo.svg')

class WelcomePage extends React.Component {
    render(){
        return (
            <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to my Customer Service Application.</h2>
            </div>
            <p className="App-intro">
              To begin, please login to your account. If you have yet to register, please click sign up instead.<br/>
              <button type="button" className="login"> Login </button>
              <button type="button" className="signup"> Sign Up </button>
            </p>
          </div>       
        )
    }
}

export default WelcomePage