import React, { type JSX } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FilmDetail from './pages/FilmDetail'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: '/',
    element: <FilmDetail />
  },
  {
    path: '/detail',
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
