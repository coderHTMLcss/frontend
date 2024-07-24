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
import { SidebarProps } from '../../common/types/sidebar';
import ThemeSwitcher from '../them-switcher';
import SearchElement from '../search-block';

const SidebarComponent: React.FC<SidebarProps> = ({ isNonMobile, drawerWidth, isOpen, setIsOpen }): JSX.Element => {
    const [active, setActive] = useState<string>('');
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setActive(pathname);
    }, [pathname]);

    const handleLogout = () => {
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('token');
        navigate('/login')
    }

    const renderNavMenu = navMenu.map((nav) => (
        <ListItem key={nav.id}>
            <StyledNavItem
                onClick={() => navigate(nav.path)}
                className={active === nav.path ? 'active' : ''}
            >
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
                                    <BrandTitle variant='h1'>Crypto</BrandTitle>
                                </Brand>
                                {!isNonMobile && (
                                    <IconButton sx={{ width: '10px', height: '10px', padding: '5px' }} onClick={() => setIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {!isNonMobile && (<ListItem>
                                <SearchElement />
                            </ListItem>)}
                        </List>
                        <NavList>
                            {renderNavMenu}
                        </NavList>
                    </NavBlock>
                    <Box width='100%'>
                        <List>
                            {!isNonMobile && (
                                <ListItem>
                                    <Box padding='10px'>
                                        <ThemeSwitcher />
                                    </Box>
                                </ListItem>
                            )}
                            <ListItem>
                                <StyledNavItem onClick={handleLogout}>
                                    <ListItemIcon>
                                        <LogoutOutlined />
                                    </ListItemIcon>
                                    <ListItemText >
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
