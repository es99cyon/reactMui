import React from 'react'
import './Header.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Header = () => {
    
    return (
      <Container component="main" maxWidth="xs">
                <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography> 
        < TextField label = "Email Address" name = 'email' autoComplete = "email" autoFocus required fullWidth margin="normal" />
         <TextField
            label="Password"
            type="password"
            name='password'
            autoComplete="current-password"
            fullWidth
            margin="normal" />
        <FormControlLabel
            control={<Checkbox value = "remember" color = "primary" />}
            label="Remember me"/>
        <Button
            type='submit'
            fullWidth
            variant="contained"
            sx={{
                mt: 3,
                mb: 2
            }}>로그인하기</Button>
        <Grid container>
            <Grid item xs>
                <Link>Forgot password?</Link>
            </Grid>
            <Grid item>
                <Link>Sign Up</Link>
            </Grid>
        </Grid>
        </Box>
    </Container>
    
    )

}

export default Header
