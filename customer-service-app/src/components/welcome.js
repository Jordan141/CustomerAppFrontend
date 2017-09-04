import signUp from './signup'
import login from './login'
const React = require('react')
const axios = require('axios')
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
  constructor(props){
    super(props)
    this.sendData = this.sendData.bind(this)

    this.state = {
      isLoggedIn : false
    }
  }
  sendData(item){
    return postData(buildUri(uri,LOGIN_API), payLoad)
  }

  render(){
    let login = <login onClick={()=> this.sendData(REGISTER_API)}/>
    return (
      <div className="welcome container-fluid">
        <img src = {sidebar} className='sidebar' alt='sidepic'/>
        <div className="inputArea">
          <signUp onClick={()=> this.sendData(REGISTER_API)}/>
        </div>
      </div>       
    )
  }   
}

export default WelcomePage