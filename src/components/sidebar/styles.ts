import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    drawerElement: {
      "& .MuiDrawer-paper": {
        color: colors.secondary.DEFAULT,
        backgroundColor: colors.primary.DEFAULT,
        boxSizing: "border-box",
      },
    },
    navBlock: {
      width: "100%",
      borderBottom: `1px solid ${colors.borderColor}`,
    },
    brand: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "30px 15px",
      cursor: "pointer",
    },
    brandTitle: {
      color: `${
        theme.palette.mode === "dark"
          ? colors.white.DEFAULT
          : colors.black.DEFAULT
      }`,
    },
    navList: {
      marginBottom: "55px",
    },
    navItem: {
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#1900D5 !important",
        color: "#fff",
        borderRadius: "4px",
        "& .MuiSvgIcon-root": {
          color: `${colors.white.DEFAULT} !important`,
        },
      },
    },
  };
});
