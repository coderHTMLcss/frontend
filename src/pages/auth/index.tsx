import React, { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import LoginPage from './login';
import RegisterPage from './register';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { AppErrors } from '../../common/errors';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema, RegisterSchema } from '../../utils/yup';
import { ILoginData, IRegisterData, UserData } from '../../common/types/auth';
import { StyledDiv, StyledForm } from './styles';
import { loginUser, registerUser } from '../../store/thunks/auth';


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

    const loading = useAppSelector((state) => state.auth.isLoading)

    const handleSubmitForm = async (data: UserData) => {
        if (location.pathname === '/login') {
            try {
                await dispatch(loginUser(data as ILoginData));
                navigate('/');
            } catch (error: any) {
                console.error('Login error:', error);
                return error.message;
            }
        } else {
            if (data.password === data.confirmPassword) {
                try {
                    const userData: IRegisterData = {
                        firstName: data.firstName,
                        userName: data.userName,
                        email: data.email,
                        password: data.password,
                    };
                    await dispatch(registerUser(userData));
                    navigate('/');
                } catch (error: any) {
                    console.error('Registration error:', error);
                    return error.message;
                }
            } else {
                throw new Error(AppErrors.PasswordDoesNotMatch);
            }
        }
    };


    return (
        <StyledDiv >
            <StyledForm onSubmit={handleSubmit(handleSubmitForm as () => Promise<UserData>)}>
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
                                loading={loading}
                            />
                            : location.pathname === '/register' ?
                                <RegisterPage
                                    navigate={navigate}
                                    register={register as any}
                                    errors={errors}
                                    loading={loading}
                                />
                                : null}
                </Box>
            </StyledForm>
        </StyledDiv>
    )
}

export default AuthRootComponent