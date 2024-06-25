import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "32px 24px",
      backgroundColor: colors.primary.DEFAULT,
      maxHeight: "95px",
      borderBottom: `1px solid ${colors.borderColor}`,
    },
    gridIcon: {
      paddingRight: "35px",
      paddingTop: "10px",
      borderRight: `2px solid ${colors.borderColor}`,
    },
    themeIcon: {
      marginRight: "28px",
    },
    searchBlock: {
      display: "flex",
      backgroundColor: `${colors.primary[500]}`,
      borderRadius: "8px",
      marginLeft: "28px",
    },
    searchIcon: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    searchInput: {
      padding: "18px 12px",
    },
  };
});
