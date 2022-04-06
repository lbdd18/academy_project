import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Toolbar, CssBaseline } from '@mui/material';

import NewsList from './pages/News/List'
import VersionsList from './pages/Versions'
import Counter from './pages/Counter'

import MuiHeader from './components/MuiHeader';
import MuiDrawer from './components/MuiDrawer';

import './services/server'
import { theme } from './styles/theme';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number + 1);
    }

    const muiTheme = theme(darkMode)

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <MuiHeader title="Studio Academy" darkMode={darkMode} setDarkMode={setDarkMode} />
            <div style={{ display: 'flex' }}>
                <MuiDrawer />
                <div style={{ padding: '16px' }}>
                    <Toolbar />
                    <NewsList />
                    <VersionsList />
                    <Counter number={number} increment={increment} />
                </div>
            </div>
        </ThemeProvider>
    )
}