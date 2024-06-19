import { IconButton, Stack, Typography } from '@mui/material';
import NavBar2 from '../../../NavBar2/NavBar2';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const sportArray = [
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'Football',
            link: '/',
        },
        {
            text: 'Cricket',
            link: '/',
        },
        {
            text: 'Formula 1',
            link: '/',
        },
        {
            text: 'Rugby U',
            link: '/',
        },
        {
            text: 'Tennis',
            link: '/',
        },
        {
            text: 'Golf',
            link: '/',
        },
        {
            text: 'Athletics',
            link: '/',
        },
        {
            text: 'Cycling',
            link: '/',
        },
    ];

    function handleClick(object) {
        if (window) {
            window.location.href = object?.link;
        }
    }

    return (
        <Stack>
            <NavBar2 />
            <Stack height={'99px'} sx={{ backgroundColor: '#FFD230' }}>
                <Stack
                    borderBottom={'1px solid black'}
                    pl={17}
                    component={'div'}
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                        window.location.href = '/sports';
                    }}
                >
                    <Typography fontSize={'40px'} fontWeight={1000}>
                        SPORT
                    </Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack direction={'row'} spacing={2} pl={17} pt={1}>
                        {sportArray.map((object) => {
                            return (
                                <Stack
                                    component={'div'}
                                    onClick={() => handleClick(object)}
                                    sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
                                >
                                    <Typography fontSize={'14px'} fontWeight={1000} color={'black'}>
                                        {object.text}
                                    </Typography>
                                </Stack>
                            );
                        })}
                    </Stack>
                    <Stack height={1} pl={1} borderLeft={'1px solid black'} pr={17}>
                        <IconButton>
                            <MenuIcon sx={{ fontSize: 20, color: 'black' }} />{' '}
                            <Typography fontSize={'14px'} fontWeight={1000} sx={{ color: 'black' }}>
                                More
                            </Typography>
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Header;
