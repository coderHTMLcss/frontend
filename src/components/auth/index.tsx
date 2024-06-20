import React, { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import LoginPage from './login';
import RegisterPage from './register';
import { instance } from '../../utils/axios';
import "./style.scss";
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';


const AuthRootComponent: FC = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState('');
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (location.pathname === '/login') {
            try {
                const userData = {
                    email,
                    password,
                }
                const user = await instance.post('auth/login', userData);
                dispatch(login(user.data));
                navigate('/')
            } catch (error: any) {
                return error.message
            }
        } else {
            if (password === repeatPassword) {
                const userData = {
                    firstName,
                    userName,
                    email,
                    password,
                }
                const newUser = await instance.post('auth/register', userData);
                console.log(newUser.data);
            } else {
                throw new Error(AppErrors.PasswordDoesNotMatch);
            }
        }
    }

    return (
        <div className='root'>
            <form onSubmit={handleSubmit} className='form'>
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
                                setEmail={setEmail}
                                setPassword={setPassword}
                                navigate={navigate}
                            />
                            : location.pathname === '/register' ?
                                <RegisterPage
                                    setEmail={setEmail}
                                    setPassword={setPassword}
                                    setRepeatPassword={setRepeatPassword}
                                    setFirstName={setFirstName}
                                    setUserName={setUserName}
                                    navigate={navigate}
                                />
                                : null}
                </Box>
            </form>
        </div>
    )
}

export default AuthRootComponent
