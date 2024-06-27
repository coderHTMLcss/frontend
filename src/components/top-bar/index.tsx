import React, { useContext, FC } from 'react';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import { Notifications, SearchOutlined, DarkModeSharp, WbSunnyOutlined } from '@mui/icons-material';
import { useAppSelector } from '../../utils/hook';
import { ColorModeContext } from '../../theme';
import FlexBetween from '../flexBetween';
import { TopBarProps } from '../../common/types/topbar';
import {
    StyledAppBar,
    StyledToolbar,
    MenuIcon,
    GridIcon,
    ThemeIcon,
    SearchBlock,
    SearchIcon,
    SearchInput
} from './styles';

const TopBarComponent: FC<TopBarProps> = ({ isOpen, setIsOpen }): JSX.Element => {
    const user = useAppSelector(state => state.auth.user);
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <StyledAppBar theme={theme}>
            <StyledToolbar>
                <FlexBetween>
                    <MenuIcon onClick={() => setIsOpen(!isOpen)} />
                    <Typography variant="h3">
                        Welcome {user ? `${user.firstName}` : ''}
                    </Typography>
                </FlexBetween>
                <Box display='flex'>
                    <GridIcon theme={theme}>
                        <ThemeIcon onClick={colorMode.toggleColorMode}>
                            {theme.palette.mode === 'dark' ? (<DarkModeSharp />) : (<WbSunnyOutlined />)}
                        </ThemeIcon>
                        <IconButton>
                            <Notifications />
                        </IconButton>
                    </GridIcon>
                    <SearchBlock theme={theme}>
                        <SearchIcon>
                            <SearchOutlined />
                        </SearchIcon>
                        <SearchInput />
                    </SearchBlock>
                </Box>
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default TopBarComponent;
