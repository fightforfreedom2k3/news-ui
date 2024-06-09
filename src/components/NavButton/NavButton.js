import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Link, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function NavButton() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const data = [
        {
            text: 'HomePage',
            link: '/',
        },
        {
            text: 'News',
            link: '/news',
        },
        {
            text: 'Sports',
            link: '/sports',
        },
        {
            text: 'Business',
            link: '/business',
        },
        {
            text: 'Innovation',
            link: '/innovation',
        },
        {
            text: 'Culture',
            link: '/culture',
        },
    ];

    const handleClick = (pageItem) => {
        if (window) {
            window.location.href = pageItem?.link;
        }
    };

    const DrawerList = (
        <Box sx={{ width: 250, pt: '65px' }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {data.map((page, index) => (
                    <ListItem key={page.text} disablePadding onClick={() => handleClick(page)}>
                        <ListItemButton>
                            <ListItemText primary={page.text} />
                            <Link href={page.link}></Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Stack direction={'row'}>
            <IconButton onClick={toggleDrawer((preValue) => !preValue)}>
                <MenuIcon fontSize="large"></MenuIcon>
            </IconButton>

            <IconButton onClick={toggleDrawer((preValue) => !preValue)}>
                <SearchIcon fontSize="large"></SearchIcon>
            </IconButton>

            <Drawer sx={{ '&.MuiDrawer-paper': { zIndex: 100000 } }} open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </Stack>
    );
}
