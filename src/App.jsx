import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Error404 from './pages/Error404'
import Home from './pages/Home'
import Faq from './pages/Faq/Faq'
import TodoList from './pages/TodoList/TodoList'
import Login from './pages/Login'
import Register from './pages/Register'

let allRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "faq",
    element: <Faq />
  },
  {
    path: "todolist",
    element: <TodoList />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "Register",
    element: <Register />
  },
  {
    path: "*",
    element: <Error404 />
  },
]);
export default function App() {
  return (
    <>
    <RouterProvider router={allRouter} />
    </>
  )
}
