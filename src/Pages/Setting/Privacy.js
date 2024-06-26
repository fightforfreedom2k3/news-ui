import { Grid, IconButton, Stack, Typography, Button, Input, Box, Divider } from '@mui/material';
import NavBar2 from '../../components/NavBar2/NavBar2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import Footer from '../../components/Layout/SportLayout/Footer/Footer';
import { Image } from '@mui/icons-material';
export default function Privacy() {
    return (
        <Stack>
            <NavBar2 />
            <Stack
                width={'100vw'}
                alignItems={'center'}
                justifyContent={'center'}
                borderTop={'2px solid #e2e2e2'}
                sx={{ backgroundColor: '#f5f5f5' }}
            >
                <Stack width={1300} pt={2}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography fontWeight={1000} fontSize={'2rem'}>
                            Settings
                        </Typography>
                        <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'center'}>
                            <Stack
                                fontWeight={900}
                                sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}
                                onClick={() => {
                                    window.location.href = '/account';
                                }}
                            >
                                Overview
                            </Stack>
                            <Stack
                                pl={2}
                                pr={2}
                                fontWeight={900}
                                borderLeft={'2px solid black'}
                                borderRight={'2px solid black'}
                                sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}
                                onClick={() => {
                                    window.location.href = '/setting';
                                }}
                            >
                                Settings
                            </Stack>
                            <Stack
                                sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}
                                fontWeight={900}
                                onClick={() => {
                                    window.location.href = '/login';
                                }}
                            >
                                Sign out
                            </Stack>
                        </Stack>
                    </Stack>
                    <Grid container>
                        <Grid sm={3} height={'40vh'}>
                            <Stack
                                height={'30%'}
                                borderBottom={'2px solid #e2e2e2'}
                                justifyContent={'center'}
                                sx={{
                                    '&:hover': {
                                        '& .MuiTypography-root': { color: '#004ca7' },
                                        borderLeft: '3px solid #006def',
                                    },
                                }}
                                onClick={() => (window.location.href = '/setting')}
                            >
                                <Button
                                    sx={{
                                        color: '#525252',
                                        textTransform: 'none',
                                        justifyContent: 'flex-start',
                                        height: '100%',
                                    }}
                                >
                                    <AccountCircleIcon sx={{ color: '#006def' }} />
                                    <Typography pl={2} color={'#006def'} fontWeight={1000}>
                                        Personal details
                                    </Typography>
                                </Button>
                            </Stack>
                            <Stack
                                height={'30%'}
                                borderBottom={'2px solid #e2e2e2'}
                                justifyContent={'center'}
                                borderLeft={'3px solid #006def'}
                                sx={{
                                    '&:hover': {
                                        '& .MuiTypography-root': { color: '#004ca7' },
                                        borderLeft: '3px solid #006def',
                                    },
                                }}
                                onClick={() => {
                                    window.location.href = '/privacy&cookies';
                                }}
                            >
                                <Button
                                    sx={{
                                        color: '#525252',
                                        textTransform: 'none',
                                        justifyContent: 'flex-start',
                                        height: '100%',
                                    }}
                                >
                                    <LockIcon sx={{ color: '#525252' }} />
                                    <Typography pl={2} color={'#525252'} fontWeight={1000}>
                                        Privacy & Cookies
                                    </Typography>
                                </Button>
                            </Stack>
                            <Stack
                                height={'30%'}
                                borderBottom={'2px solid #e2e2e2'}
                                justifyContent={'center'}
                                sx={{
                                    '&:hover': {
                                        '& .MuiTypography-root': { color: '#004ca7' },
                                        borderLeft: '3px solid #006def',
                                    },
                                }}
                                onClick={() => {
                                    window.location.href = '/emailpreferences';
                                }}
                            >
                                <Button
                                    sx={{
                                        color: '#525252',
                                        textTransform: 'none',
                                        justifyContent: 'flex-start',
                                        height: '100%',
                                    }}
                                >
                                    <MailIcon sx={{ color: '#006def' }} />
                                    <Typography pl={2} color={'#006def'} fontWeight={1000}>
                                        Email Preferences
                                    </Typography>
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid sm={9} sx={{ backgroundColor: 'white' }} p={5}>
                            <Typography fontWeight={1000} fontSize={'2rem'} pb={3}>
                                Privacy and cookies
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Stack
                        pt={7}
                        sx={{ backgroundColor: '#f5f5f5' }}
                        direction={'row'}
                        justifyContent={'space-between'}
                    >
                        <Stack gap={2} width={'50%'}>
                            <Typography fontSize={'2rem'} fontWeight={1000}>
                                Your privacy and the News Project
                            </Typography>
                            <Typography fontSize={'1.3rem'}>
                                Want to know what's happening with your info and how you can take control?
                            </Typography>
                            <Stack sx={{ ':hover': { color: '#004ca7' }, cursor: 'pointer' }}>
                                <Typography fontWeight={1000}>Find out more</Typography>
                                <Divider sx={{ width: '7vw' }} />
                            </Stack>
                        </Stack>
                        <Box
                            component={'img'}
                            src="https://static.files.bbci.co.uk/account/id-profile/1599/css/img/privacy_grey_desktop.png"
                            height={'50vh'}
                            width={'50vw'}
                        />
                    </Stack>
                </Stack>
            </Stack>
            <Footer />
        </Stack>
    );
}
