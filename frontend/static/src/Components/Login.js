import React, {Component} from 'react'
import Cookies from 'js-cookie'
import '../App.css';

class Login extends Component {
  constructor (props){
        super(props);
        this.state = {
          isLoggedIn: !!Cookies.get('Authorization'),
          username: "",
          email: "",
          password: "",
          data: [],
        }
    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.reset = this.reset.bind(this);
      }




reset(){
  this.setState({usernamelog: ""})
  this.setState({passlog: ""})
  this.setState({username: ""})
  this.setState({password: ""})
  window.location.reload();
}


  async handleLogin(e){
    e.preventDefault();
    let obj = {
      username: this.state.usernamelog,
      password: this.state.passlog,
    }
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(obj),
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/login/', options);
    const data = await response.json().catch(handleError);
    if(data.key) {
    Cookies.set('Authorization', `Token ${data.key}`);
    alert('Logged in!')
    this.reset();
    }

  }


handleInput(event){
          this.setState({[event.target.name]: event.target.value});
        }




handleLogout(){
      const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken'),
            },
        };
        fetch("/rest-auth/logout/", options)
          .then(response => response.json())
          .then(response => this.setState({data: response}));
          Cookies.remove('Authorization');
          Cookies.remove('sessionid');
          localStorage.clear()


    }



  render(){


// const loginForm = <form onSubmit={(e) => this.handleLogin(e, this.state)}>
const loginForm = <form onSubmit={(e) => this.handleLogin(e, this.state)}>
      <input className="input-group form-control" type="text" placeholder="username" name="usernamelog" value={this.state.usernamelog} onChange={this.handleInput}/>
      <input className="input-group form-control" type="password" placeholder="password" name="passlog" value={this.state.passlog} onChange={this.handleInput}/>
      <button className="logButton" onClick={(e)=>this.handleLogin(e, this.state)} type="submit">Log In</button>
      </form>


const logOutForm = <form onSubmit={(e) => this.handleLogout(e, this.state)}>
<button className="logButton" type="submit">Log Out</button></form>



      return(
        <div>
            {loginForm}
            {logOutForm}
        </div>
      );
    }
  }
  export default Login