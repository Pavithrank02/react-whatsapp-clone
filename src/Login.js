import { Button } from '@mui/material'
import React from 'react'
import './Login.css'

function Login() {
  const signIn = () => {
    
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
          alt="img"
          />
        <div className='login__text'>
          <h1>Sign in with WhatsApp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  )
}

export default Login