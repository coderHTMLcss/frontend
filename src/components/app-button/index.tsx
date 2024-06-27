import { styled, Button, Theme } from "@mui/material";
import { tokens } from "../../theme";

interface StyledComponentProps {
  theme?: Theme;
}

const AppButton = styled(Button)<StyledComponentProps>(({ theme }) => {
  const colors = theme ? tokens(theme.palette.mode) : tokens("light");
  return {
    margin: '16px 0 8px',
    width: '60%',
    borderRadius: '4px',
    backgroundColor: colors.blue,
    color: colors.white.DEFAULT,
    transition: 'background-color 0.5s',
    "&:hover": {
      backgroundColor: colors.secondary.DEFAULT,
    },
  };
});
export default AppButton;

