import React, { useContext, FC } from 'react';
import { AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme } from '@mui/material';
import { useAppSelector } from '../../utils/hook';
import { Notifications, SearchOutlined, DarkModeSharp, WbSunnyOutlined, MenuOutlined } from '@mui/icons-material';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';
import { ITopBar } from '../../common/types/layout';
import FlexBetween from '../flexBetween';

const TopBarComponent: FC<ITopBar> = ({ isOpen, setIsOpen }) => {
    const user = useAppSelector(state => state.auth.user);
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolbar}>
                <FlexBetween>
                    <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)} />
                    <Typography variant="h3">
                        Welcome {user ? `${user.firstName}` : ''}
                    </Typography>
                </FlexBetween>
                <Box display='flex'>
                    <Grid className={classes.gridIcon}>
                        <IconButton className={classes.themeIcon} onClick={colorMode.toggleColorMode}>
                            {theme.palette.mode === 'dark' ? (<DarkModeSharp />) : (<WbSunnyOutlined />)}
                        </IconButton>
                        <IconButton>
                            <Notifications />
                        </IconButton>
                    </Grid>
                    <Grid className={classes.searchBlock}>
                        <IconButton className={classes.searchIcon}>
                            <SearchOutlined />
                        </IconButton>
                        <InputBase className={classes.searchInput} />
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopBarComponent
