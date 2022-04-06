import { AppBar, Toolbar, Typography, Switch } from '@mui/material';

interface IMuiHeaderProps {
    title: string,
    darkMode: boolean,
    setDarkMode: (value: boolean) => void
}

const MuiHeader = ({ title, darkMode, setDarkMode }: IMuiHeaderProps) => {
    return (
        <>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {title}
                    </Typography>
                    <Switch checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
                </Toolbar>
            </AppBar>
        </>

    )
}

export default MuiHeader