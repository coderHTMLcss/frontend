import React, { useContext } from 'react';
import { Box, Grid, IconButton, InputBase, Typography, useTheme } from '@mui/material';
import { useAppSelector } from '../../utils/hook';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';


const TopBarComponent = () => {
    const user = useAppSelector(state => state.auth.user);
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid>
                <Typography variant="h3">
                    Welcome {user ? `${user.firstName}` : ''}
                </Typography>
            </Grid>
            <Box display='flex'>
                <Grid className={classes.gridIcon}>
                    <IconButton className={classes.themeIcon} onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? (<DarkModeSharpIcon />) : (<WbSunnyOutlinedIcon />)}
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                </Grid>
                <Grid className={classes.searchBlock}>
                    <IconButton className={classes.searchIcon}>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <InputBase className={classes.searchInput} />
                </Grid>
            </Box>
        </Box>
    )
}

export default TopBarComponent
