import React, { FC } from 'react'
import { TextField, Button, Typography } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: FC<IPropsRegister> = ({ navigate, register, errors }): JSX.Element => {
    return (
        <>
            <Typography variant="h4" fontFamily="Poppins" textAlign='center' marginBottom={2}>
                SIGN UP
            </Typography>
            <Typography variant="body1" fontFamily="Poppins" textAlign='center'>
                Enter registration details
            </Typography>
            <TextField
                error={!!errors.name}
                type='text'
                fullWidth={true}
                margin='normal'
                label="Name"
                variant="outlined"
                placeholder='Enter your name'
                helperText={errors.name ? `${errors.name.message}` : ''}
                {...register('name')}
            />
            <TextField
                error={!!errors.username}
                type='text'
                fullWidth={true}
                margin='normal'
                label="Username"
                variant="outlined"
                placeholder='Enter your username'
                helperText={errors.username ? `${errors.username.message}` : ''}
                {...register('username')}
            />
            <TextField
                error={!!errors.email}
                type='email'
                fullWidth={true}
                margin='normal'
                label="Email"
                variant="outlined"
                placeholder='Enter your email'
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}
            />
            <TextField
                error={!!errors.password}
                type='password'
                fullWidth={true}
                margin='normal'
                label="Password"
                variant="outlined"
                placeholder='Enter your password'
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <TextField
                error={!!errors.confirmPassword}
                type='password'
                fullWidth={true}
                margin='normal'
                label="Password"
                variant="outlined"
                placeholder='Confirm your password'
                helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
                {...register('confirmPassword')}
            />
            <Button type='submit' sx={{ fontFamily: 'Poppins', margin: '16px 0 8px', width: '60%' }} variant="contained">Sign Up</Button>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                If you have an account?
                <span className='incitingText' onClick={() => navigate('/login')}>Login</span>
            </Typography>
        </>
    )
}

export default RegisterPage
