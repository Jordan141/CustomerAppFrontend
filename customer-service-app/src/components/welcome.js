const React = require('react')
const logo = require('./../logo.svg')
const {uri} = require('./../config.json')
const axios = require('axios')
const LOGIN_API = '/login'
const REGISTER_API = '/register'

const postData = (uri,data) => 
      axios.post(uri, data)
      .then((res) => res.json())
      .catch(err => console.error(err, JSON.stringify(data)))

const buildUri = (uri, extension) => `${uri}${extension}`
const payLoad = {
  name: 'Jerry',
  role: 'User',
  age: '21'
}

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
              <button type="button" className="login" onClick = {() => console.log(postData(buildUri(uri,LOGIN_API), payLoad))}> Login </button>
              <button type="button" className="signup"> Sign Up </button>
            </p>
          </div>       
        )
    }   
}

export default WelcomePage