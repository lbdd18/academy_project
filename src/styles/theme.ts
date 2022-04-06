import { createTheme } from '@mui/material/styles';

export function theme(darkMode: boolean){
    const muiTheme = createTheme({
        palette: {
            primary: {
                main: '#10559A',
            },
            secondary: {
                main: '#DB4C77',
            },
            mode: darkMode ? 'dark' : 'light',
        },
    });
    
    return muiTheme;
}