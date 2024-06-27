import { Theme, styled } from "@mui/material";
import { AppBar, Toolbar, IconButton, InputBase, Grid } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { tokens } from "../../theme";

interface StyledComponentProps {
  theme?: Theme;
}

export const StyledAppBar = styled(AppBar)<{ theme: StyledComponentProps }>`
  position: static;
  background: ${({ theme }) =>
    tokens(theme.palette.mode).primary.DEFAULT} !important;
  border-bottom: 1px solid
    ${({ theme }) => tokens(theme.palette.mode).borderColor};
  box-shadow: none !important;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 25px 45px;
`;

export const MenuIcon = styled(MenuOutlined)`
  margin-right: 10px;
  cursor: pointer;
`;

export const GridIcon = styled(Grid)<{ theme: StyledComponentProps }>`
  padding-right: 35px;
  border-right: 2px solid
    ${({ theme }) => tokens(theme.palette.mode).borderColor};
`;

export const ThemeIcon = styled(IconButton)`
  margin-right: 28px;
`;

export const SearchBlock = styled(Grid)<{ theme: StyledComponentProps }>`
  display: flex;
  max-height: 45px;
  background-color: ${({ theme }) => tokens(theme.palette.mode).primary[500]};
  border-radius: 8px;
  margin-left: 28px;
`;

export const SearchIcon = styled(IconButton)`
  &:hover {
    background-color: transparent !important;
  }
`;

export const SearchInput = styled(InputBase)`
  padding: 18px 12px;
`;
