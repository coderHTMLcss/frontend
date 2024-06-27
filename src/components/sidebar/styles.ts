import { styled } from "@mui/material";
import {
  Typography as MuiTypography,
  Drawer as MuiDrawer,
  ListItemButton as MuiListItemButton,
  Theme,
} from "@mui/material";
import { tokens } from "../../theme";

interface StyledComponentProps {
  theme?: Theme;
}

export const Drawer = styled(MuiDrawer)<StyledComponentProps>(({ theme }) => {
  const colors = theme ? tokens(theme.palette.mode) : tokens("light");
  return {
    "& .MuiDrawer-paper": {
      color: colors.secondary.DEFAULT,
      backgroundColor: colors.primary.DEFAULT,
      boxSizing: "border-box",
    },
  };
});

export const NavBlock = styled("div")<StyledComponentProps>(({ theme }) => {
  const colors = theme ? tokens(theme.palette.mode) : tokens("light");
  return {
    width: "100%",
    borderBottom: `1px solid ${colors.borderColor}`,
  };
});

export const Brand = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "30px 15px",
  cursor: "pointer",
});

export const BrandTitle = styled(MuiTypography)<StyledComponentProps>(
  ({ theme }) => {
    const colors = theme ? tokens(theme.palette.mode) : tokens("light");
    return {
      color:
        theme && theme.palette.mode === "dark"
          ? colors.white.DEFAULT
          : colors.black.DEFAULT,
    };
  }
);

export const NavList = styled("div")({
  marginBottom: "55px",
});

export const NavItem = styled(MuiListItemButton)<StyledComponentProps>(
  ({ theme }) => {
    const colors = theme ? tokens(theme.palette.mode) : tokens("light");
    return {
      "&.active": {
        backgroundColor: "#1900D5 !important",
        color: `${colors.white.DEFAULT}`,
        borderRadius: "4px !important",
        "& .MuiSvgIcon-root": {
          color: `${colors.white.DEFAULT}`,
        },
        "&:hover": {
          cursor: "auto",
        },
      },
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#1900D5 !important",
        color: "#fff",
        borderRadius: "4px",
        "& .MuiSvgIcon-root": {
          color: `${colors.white.DEFAULT} !important`,
        },
      },
    };
  }
);
