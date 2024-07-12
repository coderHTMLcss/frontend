import { Theme, styled } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
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
