import React, { FC } from 'react'
import { TextField, Typography } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';
import { StyledSpan } from '../styles';
import AppLoadingButton from '../../../components/loading-button';

const RegisterPage: FC<IPropsRegister> = ({ navigate, register, errors, loading }): JSX.Element => {
    return (
        <>
            <Typography variant="h4" fontFamily="Poppins" textAlign='center' marginBottom={2}>
                SIGN UP
            </Typography>
            <Typography variant="body1" fontFamily="Poppins" textAlign='center'>
                Enter registration details
            </Typography>
            <TextField
                error={!!errors.firstName}
                type='text'
                fullWidth={true}
                margin='normal'
                label="Name"
                variant="outlined"
                placeholder='Enter your name'
                helperText={errors.firstName ? `${errors.firstName.message}` : ''}
                {...register('firstName',)}
            />
            <TextField
                error={!!errors.userName}
                type='text'
                fullWidth={true}
                margin='normal'
                label="Username"
                variant="outlined"
                placeholder='Enter your username'
                helperText={errors.userName ? `${errors.userName.message}` : ''}
                {...register('userName')}
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
            <AppLoadingButton loading={loading} type='submit' variant="contained">Sign Up</AppLoadingButton>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                If you have an account?
                <StyledSpan className='incitingText' onClick={() => navigate('/login')}>Login</StyledSpan>
            </Typography>
        </>
    )
}

export default RegisterPage
