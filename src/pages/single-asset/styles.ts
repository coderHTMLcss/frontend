import { Avatar, Grid, styled, Typography, Theme, Button } from "@mui/material";
import { tokens } from "../../theme";

interface StyledComponentProps {
  theme?: Theme;
}

export const StyledRoot = styled(Grid)({
  padding: "10px",
  alignItems: "center",
});

export const StyledAssetName = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  margin: "50px 0 !important",
});

export const StyledCard = styled(Grid)({
  display: "flex",
  justifyContent: "center",
});

export const StyledCardItem = styled(Grid)<StyledComponentProps>(
  ({ theme }) => {
    const colors = theme ? tokens(theme.palette.mode) : tokens("light");
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: `${
        theme.palette.mode === "light"
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      padding: "20px 16px",
      width: "100%",
      maxWidth: 500,
      minHeight: 185,
      marginBottom: "25px !important",
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
    };
  }
);

export const StyledAssetIcon = styled(Avatar)({
  marginRight: "20px",
});

export const StyledAssetSymbol = styled(Typography)({
  fontSize: 20,
  fontWeight: 600,
});

export const StyledCardTitle = styled(Typography)({
  fontSize: 20,
  fontWeight: 600,
  marginRight: 2,
});

export const StyledAssetPrice = styled(Typography)({
  fontSize: 20,
});

export const StyledAssetPriceDetail = styled(Typography)({
  fontSize: 20,
});

export const StyledCardButtonBlock = styled(Grid)({
  marginTop: 25,
});

export const StyledCardButton = styled(Button)({
  "&:first-child": {
    marginRight: 20,
  },
});
