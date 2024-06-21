import { Box, Grid, Stack, Typography } from '@mui/material';
import NavBar2 from '../../components/NavBar2/NavBar2';
import Footer from '../../components/Layout/SportLayout/Footer/Footer';

export default function () {
    return (
        <>
            <NavBar2 />
            <Stack
                width={'100vw'}
                height={'536px'}
                sx={{
                    backgroundImage: `url('https://static.files.bbci.co.uk/account/id-profile/1599/css/img/account-overview-1700x956.jpg')`,
                }}
            >
                {/* Head */}
                <Stack height={'64px'} width={'100vw'} sx={{ background: 'rgba(0, 0, 0, .4)' }} alignItems={'center'}>
                    <Stack
                        width={1300}
                        height={'64px'}
                        justifyContent={'space-between'}
                        pt={1}
                        direction={'row'}
                        pl={2}
                        pr={2}
                    >
                        <Typography fontWeight={1000} fontSize={'1.5rem'} color={'white'}>
                            Your account
                        </Typography>
                        <Stack
                            direction={'row'}
                            pt={1.5}
                            spacing={2}
                            divider={<Box component={'hr'} sx={{ border: '2px solid white' }} />}
                        >
                            <Stack
                                onClick={() => {
                                    window.location.href = '/account';
                                }}
                                sx={{ cursor: 'pointer' }}
                            >
                                <Typography
                                    sx={{ ':hover': { textDecoration: 'underline' } }}
                                    color={'white'}
                                    fontWeight={1000}
                                    fontSize={'16px'}
                                >
                                    Overview
                                </Typography>
                            </Stack>
                            <Stack sx={{ cursor: 'pointer' }}>
                                <Typography
                                    color={'white'}
                                    fontWeight={1000}
                                    fontSize={'16px'}
                                    sx={{ ':hover': { textDecoration: 'underline' } }}
                                >
                                    Setting
                                </Typography>
                            </Stack>
                            <Stack sx={{ cursor: 'pointer' }}>
                                <Typography
                                    color={'white'}
                                    fontWeight={1000}
                                    fontSize={'16px'}
                                    sx={{ ':hover': { textDecoration: 'underline' } }}
                                >
                                    Sing out
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                {/* Intro */}
                <Stack alignItems={'center'}>
                    <Stack width={1300} height={'472px'} pl={2}>
                        <Grid container pt={17}>
                            <Grid sm={5}>
                                <Stack>
                                    <Typography fontSize={'56px'} lineHeight={'60px'} color={'white'}>
                                        Lovely to see you here
                                    </Typography>
                                </Stack>
                                <Stack pt={2}>
                                    <Typography color={'white'} fontWeight={1000}>
                                        Welcome to your account. You can find out more about what you can do with your
                                        account. Or visit your settings to view and edit your personal info.
                                    </Typography>
                                </Stack>
                                <Stack pt={2}>
                                    <Stack
                                        height={'52px'}
                                        width={'188px'}
                                        sx={{
                                            background: '#006def',
                                            ':hover': { background: '#005bc8' },
                                            cursor: 'pointer',
                                        }}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        component={'div'}
                                    >
                                        <Typography fontWeight={1000} color={'white'}>
                                            Continue to Setting
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                width={'100vw'}
                height={'376px'}
                sx={{
                    backgroundImage: `url('https://static.files.bbci.co.uk/account/id-profile/1599/css/img/privacy_grey_desktop.png')`,
                }}
                alignItems={'center'}
                justifyContent={'center'}
                direction={'row'}
            >
                <Stack width={1300} height={'376px'} pt={5}>
                    <Grid container>
                        <Grid sm={6}>
                            <Stack>
                                <Typography fontSize={'32px'} lineHeight={'36px'} fontWeight={1000}>
                                    Your privacy and the News Project
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography fontSize={'16px'} lineHeight={'20px'} pt={3}>
                                    Want to know what's happening with your info and how you can take control?
                                </Typography>
                            </Stack>
                            <Stack component={'div'} sx={{ cursor: 'pointer' }}>
                                <Typography
                                    sx={{ textDecoration: 'underline', ':hover': { color: '#005bc8' } }}
                                    fontSize={'16px'}
                                    lineHeight={'20px'}
                                    fontWeight={1000}
                                    pt={3}
                                >
                                    Find out more
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
            <Footer />
        </>
    );
}
