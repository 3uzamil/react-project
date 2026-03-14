import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <div>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/faq"}>Faq</Link></li>
            <li><Link to={"/todolist"}>Todo List</Link></li>
        </ul>
    </div>
  )
}
