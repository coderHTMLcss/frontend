import { styled, Grid, Box, TextField } from "@mui/material";
import { tokens } from "../../theme";

export const StyledGrid = styled(Grid)(({ theme }) => {
  const colors = theme ? tokens(theme.palette.mode) : tokens("light");
  return {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: colors.blue,
      },
    },
    "& label.Mui-focused": {
      color: `${
        theme.palette.mode === "dark"
          ? colors.white.DEFAULT
          : colors.black.DEFAULT
      }`,
    },
  };
});
export const StyledFormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0px;
`;

export const StyledInputField = styled(TextField)`
  width: 25%;
  margin-bottom: 15px;
`;

export const StyledButtonBlock = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
`;
