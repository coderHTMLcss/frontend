import React, { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery, Box } from "@mui/material";
import SidebarComponent from "../sidebar";
import TopBarComponent from "../top-bar";
import { useAppDispatch } from "../../utils/hook";
import { getPublicUser } from "../../store/thunks/auth";

const LayoutComponent: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const isNonMobile = useMediaQuery("(min-width:760px)");
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPublicUser())
  }, [dispatch])

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
            isNonMobile={isNonMobile}
          />
          <Outlet />
        </Box>
      </Box>
    )
  );
};

export default LayoutComponent;
