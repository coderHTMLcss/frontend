import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStyles } from './styles';
import {
    Box,
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import {
    ChevronLeftOutlined,
    ChevronRightOutlined,
    LogoutOutlined
} from '@mui/icons-material';
import FlexBetween from '../flexBetween';
import { navMenu } from '../../common/moks/navigate/index';
import Logo from '../../assets/images/sidebar/logo_sidebar.svg';

const SidebarComponent = ({ isNonMobile, drawerWidth, isOpen, setIsOpen }: any) => {
    const [active, setAcive] = useState('')
    const classes = useStyles();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setAcive(pathname.substring(1))
    }, [pathname]);

    const renderNavMenu = navMenu.map((nav): JSX.Element => {
        return <ListItem key={nav.id} >
            <ListItemButton className={classes.navItem} onClick={() => navigate(`${nav.path}`)}>
                <ListItemIcon>
                    {nav.icon}
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body1">{nav.name}</Typography>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    });

    return (
        <Box component='nav'>
            {isOpen && (
                <Drawer className={classes.drawerElement}
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth
                        }
                    }}
                >
                    <Box className={classes.navBlock}>
                        <Box>
                            <FlexBetween>
                                <Box className={classes.brand}>
                                    <img src={Logo} alt='logo' />
                                    <Typography
                                        className={classes.brandTitle}
                                        variant='h1'>Demo</Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined />
                                    </IconButton>
                                )}
                            </FlexBetween >
                        </Box>
                        <List className={classes.navList}>
                            {renderNavMenu}
                        </List>
                    </Box>
                    <Box width='100%'>
                        <List>
                            <ListItem >
                                <ListItemButton className={classes.navItem}>
                                    <ListItemIcon>
                                        <LogoutOutlined />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography>Logout</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            )
            }
        </Box >
    )
}

export default SidebarComponent
