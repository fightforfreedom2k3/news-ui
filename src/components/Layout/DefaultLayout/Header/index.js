import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Box, Button, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <Stack p={1.5} direction={'row'} justifyContent={'space-between'}>
                {/* Thanh Navigation */}
                <Stack direction={'row'} spacing={1}>
                    <IconButton>
                        <MenuIcon></MenuIcon>
                    </IconButton>

                    <IconButton>
                        <SearchIcon></SearchIcon>
                    </IconButton>
                </Stack>
                {/* Logo */}
                <div className={cx('header-logo')}>
                    <Box
                        component={'img'}
                        src={'https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg'}
                        width={100}
                        height={50}
                    ></Box>
                </div>
                {/* Account */}
                <div className={cx('account-item')}>
                    <Button>
                        <PersonIcon></PersonIcon>
                    </Button>
                </div>
            </Stack>
        </header>
    );
}

export default Header;
