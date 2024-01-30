import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import FilmDetail from './pages/FilmDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/detail',
    element: <FilmDetail />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
