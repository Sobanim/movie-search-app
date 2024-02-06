import React, { type FC } from 'react'
import { Box, Container, Typography } from '@mui/material'

const Footer: FC = () => {
  return (
      <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: '25px',
            backgroundColor: (theme) => theme.palette.grey[200]
          }}
      >
          <Container maxWidth="lg">
              <Typography variant="body2" align="center">
                  Created by Dmytro Soboliev
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                  {'Copyright © '}
                  {/* <Link color="inherit" href="https://yourwebsite.com/"> */}
                  {/*     Your Website */}
                  {/* </Link>{' '} */}
                  {new Date().getFullYear()}
              </Typography>
          </Container>
      </Box>
  )
}

export default Footer
