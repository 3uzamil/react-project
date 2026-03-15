import React from 'react'
import { Link } from 'react-router'
export default function Header({pageName}) {
  return (
    <div className='headerNavbar'>
        <h1>{pageName}</h1>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/faq"}>Faq</Link></li>
            <li><Link to={"/todolist"}>Todo List</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
        </ul>
    </div>
  )
}
