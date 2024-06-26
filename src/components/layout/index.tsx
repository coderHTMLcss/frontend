import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery, Box } from "@mui/material";
import SidebarComponent from "../sidebar";
import TopBarComponent from "../top-bar";

const LayoutComponent: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    location.pathname === "/login" || location.pathname === "/register" ? (
      <>
        <Outlet />
      </>
    ) : (
      <Box
        sx={{
          display: isNonMobile ? "flex" : "block",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        <SidebarComponent
          isNonMobile={isNonMobile}
          drawerWidth={250}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Box sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <TopBarComponent
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <Outlet />
        </Box>
      </Box>
    )
  );
};

export default LayoutComponent;
