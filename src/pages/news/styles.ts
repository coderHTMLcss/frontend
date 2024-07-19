import { Theme, styled, Grid } from "@mui/material";
import { tokens } from "../../theme";

interface StyledComponentProps {
  theme?: Theme;
}

export const StyledRoot = styled(Grid)<StyledComponentProps>(({ theme }) => {
  const colors = theme ? tokens(theme.palette.mode) : tokens("light");
  return {
    padding: 32,
    "& a": {
      textDecoration: "none",
      color: `${
        theme.palette.mode === "light"
          ? colors.black.DEFAULT
          : colors.white.DEFAULT
      }`,
    },
  };
});

export const StyledBlockTitle = styled(Grid)`
  text-align: 'center',
  margin-bottom: 32px,
`;

export const StyledNewsBlock = styled(Grid)<StyledComponentProps>(
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

export const StyledNewsTitle = styled(Grid)`
  margin-bottom: 32px;
`;

export const StyledReadMore = styled(Grid)`
  text-align: center;
`;
