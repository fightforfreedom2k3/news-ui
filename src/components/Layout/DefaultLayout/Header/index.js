import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Menu, MenuItem, Box, Button, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import AccountMenu from '../../../AccountMenu/AccountMenu';

const cx = classNames.bind(styles);

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <header className={cx('wrapper')}>
            <Stack p={1.2} direction={'row'} justifyContent={'space-between'}>
                {/* Thanh Navigation */}
                <Stack direction={'row'} spacing={1}>
                    <IconButton>
                        <MenuIcon fontSize="large"></MenuIcon>
                    </IconButton>

                    <IconButton>
                        <SearchIcon fontSize="large"></SearchIcon>
                    </IconButton>
                </Stack>

                {/* Logo */}
                <Stack>
                    <Box
                        component={'img'}
                        src={'https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg'}
                        width={170}
                        height={52}
                    ></Box>
                </Stack>

                {/* Account */}
                <Stack>
                    <AccountMenu />
                </Stack>
            </Stack>
        </header>
    );
}

export default Header;
