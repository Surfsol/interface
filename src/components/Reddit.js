import React, { useState } from "react";
import axios from "axios";



//need to destructure history, so can redirect user to other pages
export default function Register({ history }) {
  const [login, setLogin] = useState(
    {
      username: '',
      password: ''
    }
  )
 
console.log(`login`, login)
  const handleChange = event => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.get('https://davidanagy-posthere-flask.herokuapp.com/')
      .then(res => {
        console.log(`reddit`, res.data);
        //localStorage.setItem('token', res.data.token);
        //history.push("/signin");
      })
      .catch(err => console.log(err.response));
  };

  const handleLogin = event => {
    history.push("/signin")
  }



  return (
    <div>
      <div className='backgroundR'></div>
      <div className='content'> 
      <h1>Get Reddit Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <button  type="submit">Get Reddit Data!</button>
        </div>
      </form>
      <button  onClick={handleLogin}>Already have an account? Log in.</button>
    </div>
    </div>
  )
}