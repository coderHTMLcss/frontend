import React, { FC } from 'react'
import { TextField, Typography } from '@mui/material'
import { IPropsLogin } from '../../../common/types/auth'
import { StyledSpan } from '../styles'
import AppLoadingButton from '../../../components/loading-button'

const LoginPage: FC<IPropsLogin> = ({ navigate, register, errors, loading }): JSX.Element => {
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
            <AppLoadingButton loading={loading} type='submit' variant="contained">Sign In</AppLoadingButton>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                You don't have an account?
                <StyledSpan onClick={() => navigate('/register')}>Registration</StyledSpan>
            </Typography>
        </>
    )
}

export default LoginPage
