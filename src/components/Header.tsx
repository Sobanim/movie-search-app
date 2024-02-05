import React, { type FC } from 'react'
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
      <AppBar position="static" sx={{ background: '#fcfcfc' }}>
          <Container maxWidth="lg">
              <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      <Link to={'/'}>
                          My Movie App
                      </Link>

                  </Typography>
                  <Button color="primary">
                      <Link to={'/'}>
                        Home
                      </Link>
                  </Button>
                  <Button color="primary">
                      <Link to={'/favorites'}>
                        Favorites
                      </Link>
                  </Button>
              </Toolbar>
          </Container>
      </AppBar>
  )
}

export default Header
