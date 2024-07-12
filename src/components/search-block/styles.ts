import { Theme, styled } from "@mui/material";
import { IconButton, InputBase, Grid } from "@mui/material";
import { tokens } from "../../theme";

interface StyledComponentProps {
  theme?: Theme;
}

export const StyledSearchBlock = styled(Grid)<{ theme: StyledComponentProps }>`
  display: flex;
  max-height: 45px;
  background-color: ${({ theme }) => tokens(theme.palette.mode).primary[600]};
  border-radius: 8px;
  margin-left: 28px;
  @media (max-width: 760px) {
    margin: 0px;
  }
`;

export const SearchIcon = styled(IconButton)`
  &:hover {
    background-color: transparent !important;
  }
`;

export const SearchInput = styled(InputBase)`
  padding: 18px 12px;
`;
