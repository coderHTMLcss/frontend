import React, { FC, useState } from "react";
import { ILayout } from "../../common/types/layout";
import TopBarComponent from "../top-bar";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import SidebarComponent from "../sidebar";


const LayoutComponent: FC<ILayout> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const isNonMobile = useMediaQuery('(min-width:600px)');
  return (

    location.pathname === '/login' || location.pathname === '/register' ? (
      <>
        {children}
      </>

    ) : (
      <Box
        display={isNonMobile ? 'flex' : 'block'}
        width='100%'
        height='100%'
      >
        <SidebarComponent
          isNonMobile={isNonMobile}
          drawerWidth='250px'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <TopBarComponent />
        {children}
      </Box>
    )

  )
};

export default LayoutComponent;
