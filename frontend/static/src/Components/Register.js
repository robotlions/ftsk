import React, {Component} from 'react'
import Cookies from 'js-cookie'
import '../App.css';

class Register extends Component {
  constructor (props){
        super(props);
        this.state = {
          isLoggedIn: !!Cookies.get('Authorization'),
          username: "",
          email: "",
          password: "",
          password1: "",
          password2: "",
          data: [],
        }
    this.handleInput = this.handleInput.bind(this);
    this.reset = this.reset.bind(this);
      }

      handleInput(event){
        this.setState({[event.target.name]: event.target.value});
      }

      async handleRegistration(e, obj){
        e.preventDefault();
      
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
              },
              body: JSON.stringify(obj),
            };
            const handleError = (err) => console.warn(err);
            const response = await fetch('/rest-auth/registration/', options);
            const data = await response.json().catch(handleError);
      
            if(data.key) {
              Cookies.set('Authorization', `Token ${data.key}`);
              alert(`User ${this.state.username} created!`)
            }
            else{
                alert('Hmm. Something went wrong. Please try again')
            }
            this.setState({username: "", email: "", password1: "", password2: ""})
          }

      reset(){
        this.setState({usernamelog: ""})
        this.setState({passlog: ""})
        this.setState({username: ""})
        this.setState({password: ""})
        window.location.reload();
      }
      render(){

    const registerForm = <form onSubmit={(e) => this.handleRegistration(e, this.state)}>
      <input className="input-group form-control" type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
      <input className="input-group form-control" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
      <input className="input-group form-control" type="password" placeholder="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
      <input className="input-group form-control" type="password" placeholder="confirm password" name="password2" value={this.state.password2} onChange={this.handleInput}/>
      <p><button className="logButton" type="submit">Register</button></p>
      </form>

      return(
        <div>{registerForm}</div>

      );
      }
    }

export default Register