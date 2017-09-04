const React = require('react')
const axios = require('axios')
const logo = require('./../logo.svg')
const sidebar = require('./../business.jpg')
const {uri} = require('./../config.json')
const LOGIN_API = '/login'
const REGISTER_API = '/register'

const postData = (uri,data) => 
      axios.post(uri, data)
      .then((res) => res.data)
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
            <div className="welcome container-fluid">
            <img src = {sidebar} className='sidebar' alt='sidepic'/>
            <div className="inputArea">
              <h2>Welcome to my Customer Service Application.</h2>
              <h3> Please enter your login information below </h3>
              <input type="text" placeholder = 'E-mail' /><br/>
              <input type='password' placeholder = 'Password'/><br/>
              To begin, please login to your account. If you have yet to register, please click <a href='#'>sign up </a> instead.<br/>
              <button type="button" className="login" onClick = {() => postData(buildUri(uri,LOGIN_API), payLoad)}> Login </button>
            </div>
          </div>       
        )
    }   
}

export default WelcomePage