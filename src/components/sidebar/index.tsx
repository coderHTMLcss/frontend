import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import {
    ChevronLeftOutlined,
    LogoutOutlined
} from '@mui/icons-material';
import FlexBetween from '../flexBetween';
import { navMenu } from '../../common/moks/navigate/index';
import Logo from '../../assets/images/sidebar/logo_sidebar.svg';
import {
    Drawer as StyledDrawer,
    NavBlock,
    Brand,
    BrandTitle,
    NavList,
    NavItem as StyledNavItem,
} from './styles';

interface SidebarProps {
    isNonMobile: boolean;
    drawerWidth: number;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarComponent: React.FC<SidebarProps> = ({ isNonMobile, drawerWidth, isOpen, setIsOpen }) => {
    const [active, setActive] = useState<string>('');
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    const renderNavMenu = navMenu.map((nav) => (
        <ListItem key={nav.id}>
            <StyledNavItem onClick={() => navigate(nav.path)} >
                <ListItemIcon>
                    {nav.icon}
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body1">{nav.name}</Typography>
                </ListItemText>
            </StyledNavItem>
        </ListItem>
    ));

    return (
        <Box component='nav'>
            {isOpen && (
                <StyledDrawer
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
                    <NavBlock>
                        <Box>
                            <FlexBetween>
                                <Brand>
                                    <img src={Logo} alt='logo' />
                                    <BrandTitle variant='h1'>Demo</BrandTitle>
                                </Brand>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <NavList>
                            {renderNavMenu}
                        </NavList>
                    </NavBlock>
                    <Box width='100%'>
                        <List>
                            <ListItem>
                                <StyledNavItem>
                                    <ListItemIcon>
                                        <LogoutOutlined />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography>Logout</Typography>
                                    </ListItemText>
                                </StyledNavItem>
                            </ListItem>
                        </List>
                    </Box>
                </StyledDrawer>
            )}
        </Box>
    )
}

export default SidebarComponent;
