import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import TopBarComponent from "../top-bar";
import { useLocation } from "react-router-dom";
import { useMediaQuery, Box } from "@mui/material";
import SidebarComponent from "../sidebar";
import { useStyles } from "./styles";

const LayoutComponent: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles()

  return (
    location.pathname === '/login' || location.pathname === '/register' ? (
      <>
        <Outlet />
      </>
    ) : (
      <Box
        sx={{
          display: isNonMobile ? 'flex' : 'block',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
        }}
      >
        <SidebarComponent
          isNonMobile={isNonMobile}
          drawerWidth='250px'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Box className={classes.mainSection}>
          <TopBarComponent />
          <Outlet />
        </Box>
      </Box>
    )
  )
};

export default LayoutComponent;
