import React from 'react'
import Header from '../components/Header'

export default function Register() {
  return (
    <>
    <Header pageName={"Registeration Form"} />
    <section className='registerationSection'>
    <form className='form'>
        <label>Name</label>
        <input type="text" name='name' required/>
        <label>Email</label>
        <input type="text" name='email' required/>
        <label>Phone</label>
        <input type="text" name='phone' required/>
        <label>Address</label>
        <textarea type="text" name='address' required/>
        <button type="submit">Save</button>
    </form>
    <div className='outputContainer'>
    </div>
    </section>
    </>
  )
}
