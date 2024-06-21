import { Box, IconButton, Stack, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function NavBar2() {
    const arrayObject = [
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

    function handleClick(object) {
        if (window) {
            window.location.href = object?.link;
        }
    }

    return (
        <Stack height={'64px'} direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={8}>
            <Box
                component={'img'}
                src={'https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg'}
                width={'170px'}
                height={'52px'}
            ></Box>
            <Stack
                width={'176px'}
                height={'64px'}
                alignItems={'center'}
                justifyContent={'center'}
                br={'1px solid #e2e2e2'}
            >
                <IconButton
                    sx={{ color: 'black' }}
                    onClick={() => {
                        if (window) {
                            window.location.href = '/account';
                        }
                    }}
                >
                    <PersonIcon fontSize="medium" />{' '}
                    <Typography fontWeight={1000} fontSize={'14px'}>
                        YourAccount
                    </Typography>
                </IconButton>
            </Stack>

            <Stack direction={'row'} spacing={4}>
                {arrayObject.map((object) => {
                    return (
                        <Stack
                            component={'div'}
                            onClick={() => handleClick(object)}
                            sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}
                        >
                            <Typography fontSize={'14px'} fontWeight={1000} color={'black'}>
                                {object.text}
                            </Typography>
                        </Stack>
                    );
                })}
            </Stack>
        </Stack>
    );
}
