import React from "react";
import {
  HomeOutlined,
  AutoGraphOutlined,
  MenuBookOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

export const navMenu = [
  {
    name: "Home",
    icon: <HomeOutlined />,
    path: "/",
    id: 1,
  },
  {
    name: "Favourites",
    icon: <AutoGraphOutlined />,
    path: "/watchlist",
    id: 2,
  },
  {
    name: "News",
    icon: <SettingsOutlined />,
    path: "/news",
    id: 3,
  },
  {
    name: "Settings",
    icon: <MenuBookOutlined />,
    path: "/settings",
    id: 4,
  },
];
