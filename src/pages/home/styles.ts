import { Box, Theme, styled, Grid } from "@mui/material";
import { tokens } from "../../theme";

interface StyledComponentProps {
  theme?: Theme;
}

export const StyledRootBox = styled(Box)`
  flex-grow: 1;
  padding: 32px;
`;

export const StyledLineChartBlock = styled(Grid)<StyledComponentProps>(
  ({ theme }) => {
    const colors = theme ? tokens(theme.palette.mode) : tokens("light");
    return {
      padding: "20px 16px",
      marginTop: "32px",
      minHeight: 270,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: "12px",
      backgroundColor: `${
        theme.palette.mode === "light"
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
    };
  }
);

export const StyledCartItem = styled(Grid)<StyledComponentProps>(
  ({ theme }) => {
    const colors = theme ? tokens(theme.palette.mode) : tokens("light");
    return {
      padding: "20px 16px",
      minHeight: 185,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: "12px",
      backgroundColor: `${
        theme.palette.mode === "light"
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
    };
  }
);

export const StyledAssetsName = styled("h3")`
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  text-transform: capitalize;
  margin: 0px;
`;

export const StyledItemsDetails = styled("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

export const StyledCardPrice = styled("h4")`
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  margin: 0px;
`;

export const StyledCapitalize = styled("p")<StyledComponentProps>(
  ({ theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
      color: colors.secondary.DEFAULT,
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "21px",
    };
  }
);
