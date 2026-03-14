import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Faq from './pages/Faq/Faq'
import TodoList from './pages/TodoList/TodoList'

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
  }
]);
export default function App() {
  return (
    <>
    <RouterProvider router={allRouter} />
    </>
  )
}
