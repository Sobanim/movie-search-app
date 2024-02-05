import React, { type JSX } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Box } from '@mui/material'

const App = (): JSX.Element => {
  return (
      <>
          <Header />
              <Box component={'main'} sx={{ flexGrow: 1 }}>
              </Box>
          <Footer />
      </>

  )
}

export default App
