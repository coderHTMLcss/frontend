import React, { FC, useState } from 'react'
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Typography,
    useTheme,
} from '@mui/material'
import { tokens } from '../../theme'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../utils/hook'
import { deleteUser } from '../../store/thunks/auth'
import { StyledAlertMessage, StyledButtonBlock, StyledCheckBoxBlock, StyledTabHeading } from './styles'

const DeleteUserComponent: FC = (): JSX.Element => {
    const [checked, setChecked] = useState(false)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    console.log(checked);

    const handleDelete = () => {
        dispatch(deleteUser())
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('name')
        navigate('/login')
    }

    return (
        <Grid container>
            <StyledTabHeading item >
                <Typography variant="h2">Account Deletion</Typography>
            </StyledTabHeading>
            <StyledAlertMessage item >
                <Typography variant="body1">
                    Dear user, by deleting your account, you are deleting all of your
                    personal information. Once deleted, all the information you have saved
                    information will no longer be available.
                </Typography>
            </StyledAlertMessage>
            <StyledCheckBoxBlock item>
                <FormGroup>
                    <FormControlLabel
                        sx={{
                            justifyContent: 'center',
                        }}
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                                sx={{
                                    color: colors.blue,
                                    '&.Mui-checked': {
                                        color: colors.blue,
                                    },
                                }}
                            />
                        }
                        label="I am agree"
                    />
                </FormGroup>
            </StyledCheckBoxBlock>
            <StyledButtonBlock item >
                <Button
                    onClick={handleDelete}
                    color="success"
                    variant="outlined"
                    disabled={!checked}
                >
                    Delete Account
                </Button>
            </StyledButtonBlock>
        </Grid>
    )
}

export default DeleteUserComponent