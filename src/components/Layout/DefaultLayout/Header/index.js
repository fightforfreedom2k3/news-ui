import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Menu, MenuItem, Box, Button, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import AccountMenu from '../../../AccountMenu/AccountMenu';
import NavButton from '../../../NavButton/NavButton';
import NavBar from '../../../NavBar/NavBar';

const cx = classNames.bind(styles);

function Header() {
    return (
        <>
            <header className={cx('wrapper')}>
                <Stack>
                    <Stack p={1.2} direction={'row'} justifyContent={'space-between'}>
                        {/* Thanh Navigation */}
                        <Stack direction={'row'} spacing={1}>
                            {/* <MenuIcon fontSize="large"></MenuIcon> */}
                            <NavButton />

                            {/* <IconButton>
                                <SearchIcon fontSize="large"></SearchIcon>
                            </IconButton> */}
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

                    
                </Stack>
            </header>
            {/* <Stack marginTop={'72px'}>
                <NavBar/>
            </Stack> */}
        </>
    );
}

export default Header;
