import React, { FC, useState } from 'react'
import AppLoadingButton from '../loading-button'
import { useAppDispatch } from '../../utils/hook'
import { updateUserPassword } from '../../store/thunks/auth'
import { StyledGrid, StyledFormWrapper, StyledInputField, StyledButtonBlock } from './styles'

const ChangePasswordComponent: FC = (): JSX.Element => {
    const [newPassword, setNewPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const dispatch = useAppDispatch()

    const handleChangePassword = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const data = {
            oldPassword,
            newPassword,
        }

        dispatch(updateUserPassword(data))
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleChangePassword}>
            <StyledGrid >
                <StyledFormWrapper>
                    <StyledInputField
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        type="text"
                        label="Previous Password"
                        variant="outlined"
                    />
                    <StyledInputField
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="text"
                        label="New password"
                        variant="outlined"
                    />
                    <StyledButtonBlock>
                        <AppLoadingButton type="submit">Change password</AppLoadingButton>
                    </StyledButtonBlock>
                </StyledFormWrapper>
            </StyledGrid>
        </form>
    )
}

export default ChangePasswordComponent