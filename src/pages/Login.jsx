import React, { useState } from 'react'
import Header from '../components/Header'

export default function Login() {
  let [loginForm,setLoginForm] = useState({
    email: "",
    password: ""
  });
  let formHandle = (event) => {
    let finalForm = {...loginForm};
    let inputName = event.target.name;
    let inputValue = event.target.value;
    finalForm[inputName] = inputValue;
    setLoginForm(finalForm);
  };
  return (
    <>
    <Header pageName="Login" />
    <form className='loginForm'>
      <div className='formRow'>
        <label>Email</label>
        <input type="email" onChange={formHandle} value={loginForm.email} name='email' required/>
      </div>
      <div className='formRow'>
        <label>Password</label>
        <input type="text" onChange={formHandle} value={loginForm.password} name='password' required/>
      </div>
        <button type="submit">Login</button>
    </form>
    </>
  )
}
