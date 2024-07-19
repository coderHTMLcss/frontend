import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import AppLoadingButton from '../loading-button'
import { getPublicUser, updateUserInfo } from '../../store/thunks/auth'
import { StyledFormWrapper, StyledInputField, StyledButtonBlock, StyledGrid } from './styles'
import { IPublicUser } from '../../common/types/auth'


const SettingsPersonalInfoComponent: FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const { user } = useAppSelector((state) => state.auth.user)

    useEffect(() => {
        if (user) {
            setName(user.firstName)
            setUsername(user.userName)
            setEmail(user.email)
        }
    }, [user])

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const data = {
            firstName: name,
            userName: username,
            email: email,
        }
        dispatch(updateUserInfo(data as IPublicUser))
        dispatch(getPublicUser())
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <StyledGrid >
                <StyledFormWrapper>
                    <StyledInputField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        label="Name"
                        variant="outlined"
                    />
                    <StyledInputField
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        label="Username"
                        variant="outlined"
                    />
                    <StyledInputField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        label="Email"
                        variant="outlined"
                    />
                    <StyledButtonBlock>
                        <AppLoadingButton type="submit">Save</AppLoadingButton>
                    </StyledButtonBlock>
                </StyledFormWrapper>
            </StyledGrid>
        </form>
    )
}

export default SettingsPersonalInfoComponent