import { styled, Theme } from "@mui/material";
import { tokens } from "../../theme";
import LoadingButton from '@mui/lab/LoadingButton';

interface StyledComponentProps {
    theme?: Theme;
}

const AppLoadingButton = styled(LoadingButton)<StyledComponentProps>(({ theme }) => {
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
export default AppLoadingButton;

