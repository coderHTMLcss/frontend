import { Theme, styled } from "@mui/material";
import { tokens } from "../../theme";

interface StyledComponentProps {
  theme?: Theme;
}

export const StyledDiv = styled("div")<StyledComponentProps>(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    padding: "20px",
  };
});

export const StyledForm = styled("form")<StyledComponentProps>(() => {
  return {
    flex: 1,
  };
});

export const StyledSpan = styled("span")<StyledComponentProps>(({ theme }) => {
  const colors = theme ? tokens(theme.palette.mode) : tokens("light");
  return {
    color: colors.blue,
    marginLeft: "10px",
    cursor: "pointer",
  };
});
