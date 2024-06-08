import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Link } from '@mui/material';

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
        <div>
            <IconButton onClick={toggleDrawer((preValue) => !preValue)}>
                <MenuIcon fontSize="large"></MenuIcon>
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
