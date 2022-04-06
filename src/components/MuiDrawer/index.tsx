import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Toolbar } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CalculateIcon from '@mui/icons-material/Calculate';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const menus = [
    { name: 'Sharepoint news', icon: <NewspaperIcon /> },
    { name: 'Counter', icon: <CalculateIcon /> },
    { name: 'Versions', icon: <RocketLaunchIcon /> }
]

const MuiDrawer = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
        > 
            <Toolbar />
            <Box>
                <List>
                    {menus.map((menu) => (
                        <ListItem button key={menu.name}>
                            <ListItemIcon>
                                {menu.icon}
                            </ListItemIcon>
                            <ListItemText primary={menu.name} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default MuiDrawer