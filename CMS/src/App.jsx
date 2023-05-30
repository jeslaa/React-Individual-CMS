import React from 'react'
import './app.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Add from './pages/Add'
import ProductPage from './pages/ProductPage'
import Login from './pages/Login'

const App = () => {

  //Navigates the page
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'add',
          element: <Add />
        },
        {
          path: 'products/:id',
          element: <ProductPage />
        },

        {
          path: 'login',
          element: <Login />
        }

      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App