import React, { FC, useContext } from 'react'
import { GridIcon, ThemeIcon } from '../them-switcher/styles'
import { DarkModeSharp, WbSunnyOutlined, Notifications } from '@mui/icons-material'
import { IconButton, useTheme } from '@mui/material'
import { ColorModeContext } from '../../theme'

const ThemeSwitcher: FC = (): JSX.Element => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <>
            <GridIcon theme={theme}>
                <ThemeIcon onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (<DarkModeSharp />) : (<WbSunnyOutlined />)}
                </ThemeIcon>
                <IconButton>
                    <Notifications />
                </IconButton>
            </GridIcon>
        </>
    )
}

export default ThemeSwitcher
