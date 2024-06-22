import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { tokens } from '../../theme';
// import { useStyles } from './styles';
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
    useTheme,
} from '@mui/material';
import {
    HomeOutlined,
    ChevronLeftOutlined,
    ChevronRightOutlined,
    AutoGraphOutlined,
    MenuBookOutlined,
    SettingsOutlined,
    LogoutOutlined
} from '@mui/icons-material';
import FlexBetween from '../flexBetween';

const SidebarComponent = ({ isNonMobile, drawerWidth, isOpen, setIsOpen }: any) => {
    const [active, setAcive] = useState('')
    // const classes = useStyles();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const theme = useTheme()
    const colors = tokens(theme.palette.mode);


    useEffect(() => {
        setAcive(pathname.substring(1))
    }, [pathname]);


    return (
        <Box component='nav'>
            {isOpen && (
                <Drawer
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: colors.secondary.DEFAULT,
                            backgroundColor: colors.primary.DEFAULT,
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width='100%'>
                        <Box>
                            <FlexBetween>
                                <Box display='flex' alignItems='center' gap='10px'>
                                    <Typography>Demo</Typography>
                                </Box>
                                {isNonMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined />
                                    </IconButton>
                                )}
                            </FlexBetween >
                        </Box>
                    </Box>
                </Drawer>
            )}
        </Box>
    )
}

export default SidebarComponent
