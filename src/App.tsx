import { useEffect, useState } from 'react'
import './App.css'
import { Outlet, createHashRouter, RouterProvider, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Tareas from './components/tareas/Tareas'
import Home from './pages/home/Home'
import Post from './pages/post/Post'

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/post/:id",
          element: <Post />
        },
      ]
    },

  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
