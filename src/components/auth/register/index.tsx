import React, { FC } from 'react'
import { TextField, Button, Typography } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: FC<IPropsRegister> = ({ setEmail, setPassword, setRepeatPassword, setFirstName, setUserName, navigate }): JSX.Element => {
    return (
        <>
            <Typography variant="h4" fontFamily="Poppins" textAlign='center' marginBottom={2}>
                SIGN UP
            </Typography>
            <Typography variant="body1" fontFamily="Poppins" textAlign='center'>
                Enter registration details
            </Typography>
            <TextField onChange={(e) => setFirstName(e.target.value)} type='text' fullWidth={true} margin='normal' label="Name" variant="outlined" placeholder='Enter your name' />
            <TextField onChange={(e) => setUserName(e.target.value)} type='text' fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Enter your username' />
            <TextField onChange={(e) => setEmail(e.target.value)} type='email' fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Enter your email' />
            <TextField onChange={(e) => setPassword(e.target.value)} type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Enter your password' />
            <TextField onChange={(e) => setRepeatPassword(e.target.value)} type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Confirm your password' />
            <Button type='submit' sx={{ fontFamily: 'Poppins', margin: '16px 0 8px', width: '60%' }} variant="contained">Sign Up</Button>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                If you have an account?
                <span className='incitingText' onClick={() => navigate('/login')}>Login</span>
            </Typography>
        </>
    )
}

export default RegisterPage
