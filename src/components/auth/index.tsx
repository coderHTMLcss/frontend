import React, { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import LoginPage from './login';
import RegisterPage from './register';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema, RegisterSchema } from '../../utils/yup';
import { Data } from '../../common/types/auth';
import "./style.scss";


const AuthRootComponent: FC = (): JSX.Element => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        resolver: yupResolver(location.pathname === '/login' ? LoginSchema : RegisterSchema),
    });

    const handleSubmitForm = async (data: Data) => {
        console.log(data);
        if (location.pathname === '/login') {
            try {
                const userData = {
                    email: data.email,
                    password: data.password
                }
                const user = await instance.post('auth/login', userData);
                dispatch(login(user.data));
                navigate('/')
            } catch (error: any) {
                return error.message
            }
        } else {
            if (data.password === data.confirmPassword) {
                try {
                    const userData = {
                        firstName: data.name,
                        userName: data.username,
                        email: data.email,
                        password: data.password,
                    }
                    const newUser = await instance.post('auth/register', userData);
                    dispatch(login(newUser.data));
                    navigate('/')
                } catch (error: any) {
                    return error.message
                }
            } else {
                throw new Error(AppErrors.PasswordDoesNotMatch);
            }
        }
    }

    return (
        <div className='root'>
            <form onSubmit={handleSubmit(handleSubmitForm as () => Promise<Data>)} className='form'>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                    {
                        location.pathname === '/login' ?
                            <LoginPage
                                navigate={navigate}
                                register={register as any}
                                errors={errors}
                            />
                            : location.pathname === '/register' ?
                                <RegisterPage
                                    navigate={navigate}
                                    register={register as any}
                                    errors={errors}
                                />
                                : null}
                </Box>
            </form>
        </div>
    )
}

export default AuthRootComponent
