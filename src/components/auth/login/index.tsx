import React, { FC } from 'react'
import { TextField, Button, Typography } from '@mui/material'
import { IPropsLogin } from '../../../common/types/auth'

const LoginPage: FC<IPropsLogin> = ({ navigate, register, errors }): JSX.Element => {
    return (
        <>
            <Typography variant="h4" fontFamily="Poppins" textAlign='center' marginBottom={2}>
                SIGN IN
            </Typography>
            <Typography variant="body1" fontFamily="Poppins" textAlign='center'>
                Enter your email and password
            </Typography>
            <TextField
                error={!!errors.email}
                type='text' fullWidth={true}
                margin='normal' label="Email"
                variant="outlined"
                placeholder='Enter your email'
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}
            />

            <TextField
                error={!!errors.password}
                type='password' fullWidth={true}
                margin='normal' label="Password"
                variant="outlined"
                placeholder='Enter your password'
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <Button type='submit' sx={{ fontFamily: 'Poppins', margin: '16px 0 8px', width: '60%' }} variant="contained">Sign In</Button>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                You don't have an account?
                <span className='incitingText' onClick={() => navigate('/register')}>Registration</span>
            </Typography>
        </>
    )
}

export default LoginPage
