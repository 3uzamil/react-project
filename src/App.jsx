import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Error404 from './pages/Error404'
import Home from './pages/Home'
import Faq from './pages/Faq/Faq'
import TodoList from './pages/TodoList/TodoList'
import Login from './pages/Login'

let allRouter = createBrowserRouter([
  {
    path: "*",
    element: <Error404 />
  },
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
  }
]);
export default function App() {
  return (
    <>
    <RouterProvider router={allRouter} />
    </>
  )
}
