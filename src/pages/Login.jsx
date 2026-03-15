import React from 'react'
import Header from '../components/Header'

export default function Login() {
  return (
    <>
    <Header pageName="Login" />
    <form className='loginForm'>
      <div className='formRow'>
        <label>Email</label>
        <input type="email" />
      </div>
      <div className='formRow'>
        <label>Password</label>
        <input type="text" />
      </div>
        <button type="submit">Login</button>
    </form>
    </>
  )
}
