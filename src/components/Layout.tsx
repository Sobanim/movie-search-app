import React, { type FC, type PropsWithChildren } from 'react'
import Header from './Header'
import { Box } from '@mui/material'
import Footer from './Footer'

// eslint-disable-next-line @typescript-eslint/ban-types
const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <Header />
        <Box component={'main'} sx={{ flexGrow: 1 }}>
            {children}
        </Box>
        <Footer />
    </Box>
  )
}

export default Layout
