import React, { FC } from 'react';
import { Typography, useTheme, Grid } from '@mui/material';
import FlexBetween from '../flexBetween';
import { TopBarProps } from '../../common/types/topbar';
import {
    StyledAppBar,
    StyledToolbar,
    MenuIcon,
} from './styles';
import ThemeSwitcher from '../them-switcher';
import SearchElement from '../search-block';
import { useAppSelector } from '../../utils/hook';

const TopBarComponent: FC<TopBarProps> = ({ isOpen, setIsOpen, isNonMobile }): JSX.Element => {
    const theme = useTheme();
    const { user } = useAppSelector((state) => state.auth.user)


    return (
        <StyledAppBar theme={theme}>
            <StyledToolbar>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item sm={3} lg={3}>
                        <FlexBetween>
                            <MenuIcon onClick={() => setIsOpen(!isOpen)} />
                            <Typography variant="h3">
                                Welcome {user ? `${user.firstName}` : ''}
                            </Typography>
                        </FlexBetween>
                    </Grid>
                    {isNonMobile && (<Grid display='flex' justifyContent='flex-end' item sm={9} lg={9}>
                        <ThemeSwitcher />
                        <SearchElement />
                    </Grid>)}
                </Grid>
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default TopBarComponent;
