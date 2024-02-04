import React, { type JSX } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FilmDetail from './pages/FilmDetail'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/detail/:id',
    element: <FilmDetail />
  }
])

const queryClient = new QueryClient()

const App = (): JSX.Element => {
  return (
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider>
  )
}

export default App
