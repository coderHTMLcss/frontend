import React, { useContext } from 'react';
import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import { useAppSelector } from '../../utils/hook';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { ColorModeContext, tokens } from '../../theme';


const TopBarComponent = () => {
    const { user } = useAppSelector(state => state.auth.user);
    const theme = useTheme()
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display='flex' justifyContent='space-between' px='32px' py='24px'>
            <Grid>Welcom {user?.firstName}</Grid>
            <Box display='flex'>
                <Grid sx={{ pr: '37px', borderRight: `2px solid ${colors.secondary.DEFAULT}` }}>
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? (<DarkModeSharpIcon />) : (<WbSunnyOutlinedIcon />)}
                    </IconButton>
                    <IconButton sx={{ ml: '45px' }}>
                        <NotificationsIcon />
                    </IconButton>
                </Grid>
                <Grid
                    sx={{
                        display: 'flex',
                        backgroundColor: `${colors.primary[500]}`,
                        borderRadius: '8px',
                        ml: '28px'
                    }}
                >
                    <IconButton sx={{ '&:hover': { background: 'transparent' } }}>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <InputBase sx={{
                        px: '18px',
                        py: '12px'
                    }} placeholder='Search' />
                </Grid>
            </Box>
        </Box>
    )
}

export default TopBarComponent
