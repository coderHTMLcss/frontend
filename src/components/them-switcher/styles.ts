import { Theme, styled } from "@mui/material";
import { IconButton, Grid } from "@mui/material";
import { tokens } from "../../theme";

interface StyledComponentProps {
  theme?: Theme;
}

export const GridIcon = styled(Grid)<{ theme: StyledComponentProps }>`
  padding-right: 35px;
  border-right: 2px solid
    ${({ theme }) => tokens(theme.palette.mode).borderColor};
  @media (max-width: 760px) {
    border-right: none;
  }
`;

export const ThemeIcon = styled(IconButton)`
  margin-right: 28px;
`;
