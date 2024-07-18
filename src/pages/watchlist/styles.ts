import { Theme, styled, Grid, Typography } from "@mui/material";
import { tokens } from "../../theme";

interface StyledComponentProps {
  theme?: Theme;
}

export const StyledRoot = styled(Grid)`
  padding: 10px 20px;
`;

export const StyledWatchlistHeading = styled(Grid)`
  textalign: "center";
`;

export const StyledHeading = styled(Typography)`
  margin: 25px 0;
`;

export const StyledAssetsTableBlock = styled(Grid)<StyledComponentProps>(
  ({ theme }) => {
    const colors = theme ? tokens(theme.palette.mode) : tokens("light");
    return {
      backgroundColor: `${
        theme.palette.mode === "light"
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      padding: "20px 16px",
      marginBottom: 32,
      minHeight: 270,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
      "& .MuiPaper-root": {
        backgroundColor: "transparent !important",
        boxShadow: "none !important",
        backgroundImage: "none !important",
      },
    };
  }
);
