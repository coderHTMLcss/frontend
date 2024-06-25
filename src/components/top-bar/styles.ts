import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    root: {
      position: "static",
      background: `${colors.primary.DEFAULT} !important`,
      borderBottom: `1px solid ${colors.borderColor}`,
      boxShadow: "none !important",
    },
    toolbar: {
      justifyContent: "space-between",
      padding: "25px 45px",
    },
    menuIcon: {
      marginRight: "10px",
      cursor: "pointer",
    },
    gridIcon: {
      paddingRight: "35px",
      borderRight: `2px solid ${colors.borderColor}`,
    },
    themeIcon: {
      marginRight: "28px",
    },
    searchBlock: {
      display: "flex",
      maxHeight: "45px",
      backgroundColor: `${colors.primary[500]}`,
      borderRadius: "8px",
      marginLeft: "28px",
    },
    searchIcon: {
      "&:hover": {
        backgroundColor: "transparent !important",
      },
    },
    searchInput: {
      padding: "18px 12px",
    },
  };
});
