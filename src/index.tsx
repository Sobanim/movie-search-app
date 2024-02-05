import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './redux/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import FilmDetail from './pages/FilmDetail'
import Layout from './components/Layout'
import Favorites from './pages/Favorites'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <Layout>
            <Home />
        </Layout>)
  },
  {
    path: '/detail/:id',
    element: (
        <Layout>
            <FilmDetail />
        </Layout>
    )
  },
  {
    path: '/favorites',
    element: (
         <Layout>
             <Favorites />
         </Layout>
    )
  }
])

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <Provider store={store}>
              <RouterProvider router={router} />
          </Provider>
      </QueryClientProvider>

  </React.StrictMode>
)
