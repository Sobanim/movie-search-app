import React, { type FC } from 'react'
import { AppBar, Button, Container, Toolbar, Typography, Link as MuiLink } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Logo from './icons/Logo'

const Header: FC = () => {
  return (
      <AppBar position="static" sx={{
        backgroundColor: (theme) => theme.palette.grey[200]
      }}>
          <Container maxWidth="md">
              <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      <RouterLink to={'/'} style={{ textDecoration: 'none' }}>
                          <MuiLink underline={'none'} fontSize={{ xs: '16px', sm: '20px', md: '22px' }} sx={{ display: 'flex', alignItems: 'center' }}>
                              <Logo />
                              Movie Search
                          </MuiLink>
                      </RouterLink>
                  </Typography>
                  <Button color="primary">
                      <RouterLink to={'/'} style={{ textDecoration: 'none' }}>
                        Home
                      </RouterLink>
                  </Button>
                  <Button color="primary" style={{ textDecoration: 'none' }}>
                      <RouterLink to={'/favorites'}>
                        Favorites
                      </RouterLink>
                  </Button>
              </Toolbar>
          </Container>
      </AppBar>
  )
}

export default Header
