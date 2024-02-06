import { useState } from "react"
import { observer } from "mobx-react"
import { Button, TextField, Box, Typography, Container } from "@mui/material"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { CheckLogin } from "../../data/Server"
import ShowBusinessData from "../businessData/ShowBusinessData";
import './Admin.css'
const Login = (observer(() => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <ShowBusinessData />
      <Container component="main" maxWidth="xs" style={{ marginLeft: '28vw' }}>
        <CssBaseline />
        <Box
          sx={{
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
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
              fullWidth
              label="name"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
            />
            <Button
              onClick={() => CheckLogin(name, password)}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}))

export default Login