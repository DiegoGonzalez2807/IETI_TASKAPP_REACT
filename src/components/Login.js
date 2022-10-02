import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Login(){
    return (
        <Container component="main" maxWidth={'xs'} elevation={10}>
          <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
            <h2>Sign In</h2>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
             
              <Button

                type="submit"
                fullWidth
                variant="contained"
                sx={{ marginTop: 3, marginBottom: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
    );
}

export default Login;

 
